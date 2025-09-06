import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Skeleton from "@/components/ui/skeleton";
import { Sparkles, ArrowRight } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { logErrorToProduction } from '@/utils/productionLogger';

interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number;
  };
  keyPoints: string[];
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  };
}

export const AIListingGenerator: React.FC<AIListingGeneratorProps> = ({
  onApplyGenerated,
  initialValues = {}
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [formData, setFormData] = useState({
    title: initialValues.title || '',
    category: initialValues.category || '',
    keyFeatures: initialValues.keyFeatures || '',
    targetAudience: initialValues.targetAudience || ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateContent = async () => {
    if (!formData.title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a title for your listing",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      setGeneratedContent(data);
      
      toast({
        title: "Success",
        description: "Content generated successfully!",
      });
    } catch (error) {
      console.error('Error generating content:', error);
      logErrorToProduction(error as Error, 'AIListingGenerator.generateContent');
      
      toast({
        title: "Error",
        description: "Failed to generate content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApplyGenerated = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: "Applied",
        description: "Generated content has been applied to your listing",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            AI Listing Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Title *</label>
              <Input
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter your service title"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Category</label>
              <Input
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                placeholder="e.g., Web Development, Design"
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Key Features</label>
            <Textarea
              value={formData.keyFeatures}
              onChange={(e) => handleInputChange('keyFeatures', e.target.value)}
              placeholder="Describe the main features of your service"
              className="mt-1"
              rows={3}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Target Audience</label>
            <Textarea
              value={formData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              placeholder="Who is this service for?"
              className="mt-1"
              rows={2}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={generateContent} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Content
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Description</h4>
              <p className="text-sm text-gray-600">{generatedContent.description}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Suggested Price Range</h4>
              <p className="text-sm text-gray-600">
                ${generatedContent.suggestedPrice.min} - ${generatedContent.suggestedPrice.max}
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {generatedContent.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Key Points</h4>
              <ul className="list-disc list-inside space-y-1">
                {generatedContent.keyPoints.map((point, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleApplyGenerated} className="w-full">
              Apply Generated Content
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};