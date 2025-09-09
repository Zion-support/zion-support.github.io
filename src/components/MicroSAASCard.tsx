import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import { Star, ExternalLink, Zap, Shield, Clock, Users } from 'lucide-react';

interface MicroSAASCardProps {
  title: string;
  description: string;
  category: string;
  pricing: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  features: string[];
  tags: string[];
  demoUrl?: string;
  documentationUrl?: string;
  githubUrl?: string;
  status: 'live' | 'beta' | 'coming-soon';
  rating?: number;
  users?: number;
  onTryDemo?: () => void;
  onViewDetails?: () => void;
}

export function MicroSAASCard({
  title,
  description,
  category,
  pricing,
  features,
  tags,
  demoUrl,
  documentationUrl,
  githubUrl,
  status,
  rating,
  users,
  onTryDemo,
  onViewDetails
}: MicroSAASCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800 border-green-200';
      case 'beta': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'coming-soon': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live': return <Zap className="w-3 h-3" />;
      case 'beta': return <Clock className="w-3 h-3" />;
      case 'coming-soon': return <Shield className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isHovered ? 'ring-2 ring-blue-500' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold text-gray-900">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              {description}
            </CardDescription>
          </div>
          <Badge 
            variant="outline" 
            className={`text-xs ${getStatusColor(status)}`}
          >
            {getStatusIcon(status)}
            <span className="ml-1 capitalize">{status}</span>
          </Badge>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="font-medium">{category}</span>
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
          {users && (
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{users.toLocaleString()}+ users</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">
            {pricing.currency}{pricing.monthly}
          </span>
          <span className="text-sm text-gray-500">/month</span>
          <span className="text-xs text-green-600 font-medium">
            or {pricing.currency}{pricing.yearly}/year
          </span>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-xs text-gray-500">
                +{features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          {status === 'live' && (
            <>
              <Button 
                onClick={onTryDemo}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Try Demo
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
              <Button 
                variant="outline" 
                onClick={onViewDetails}
                className="flex-1"
              >
                View Details
              </Button>
            </>
          )}
          {status === 'beta' && (
            <Button 
              onClick={onTryDemo}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              Join Beta
            </Button>
          )}
          {status === 'coming-soon' && (
            <Button 
              variant="outline" 
              className="w-full"
              disabled
            >
              Coming Soon
            </Button>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-2 w-full">
          {demoUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Demo
              </a>
            </Button>
          )}
          {documentationUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={documentationUrl} target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default MicroSAASCard;