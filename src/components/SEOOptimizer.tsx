'use client',
import React, { useEffect, useState } from 'react',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Progress } from '@/components/ui/progress',
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ExternalLink,
  Eye,
  Zap,
  Globe;
  Smartphone;
  Monitor
} from 'lucide-react',
interface SEOAnalysis {
  score: number,
  title: string,
  description: string,
  keywords: string[],
  issues: Array<{
    type: 'error' | 'warning' | 'info',
    message: string,
    suggestion: string, }>;
  recommendations: Array<{
    category: string,
    priority: 'high' | 'medium' | 'low',
    description: string, }>;
  technical: {
    metaTags: boolean,
    structuredData: boolean,
    sitemap: boolean,
    robotsTxt: boolean,
    ssl: boolean,
    mobileFriendly: boolean,
    pageSpeed: number, }, }

const SEOOptimizer: React.FC = () => {
  const [analysis, setAnalysis] = useState<SEOAnalysis>({
    score: 0,
    title: '',
    description: '',
    keywords: [],
    issues: [],
    recommendations: [],
    technical: {
      metaTags: false,
      structuredData: false,
      sitemap: false,
      robotsTxt: false,
      ssl: false,
      mobileFriendly: false,
      pageSpeed: 0,
    }, });

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    // Simulate SEO analysis
    const analyzeSEO = () => {
      setIsAnalyzing(true);
      
      setTimeout(() => {
        setAnalysis({
          score: Math.floor(Math.random() * 40) + 60, // 60-100
          title: "Zion Tech Group - Innovative Technology Solutions",
          description: "Leading provider of AI, cloud, cybersecurity, and digital transformation solutions. Transform your business with cutting-edge technology.",
          keywords: ["AI solutions", "cloud computing", "cybersecurity", "digital transformation", "technology consulting"],
          issues: [
            {
              type: 'warning',
              message: 'Title tag is too long (65+ characters)',
              suggestion: 'Keep title under 60 characters for better search visibility'
            },
            {
              type: 'info',
              message: 'Missing Open Graph image',
              suggestion: 'Add og:image meta tag for better social media sharing'
            },
            {
              type: 'error',
              message: 'No structured data found',
              suggestion: 'Implement JSON-LD structured data for better search results'
            }
          ],
          recommendations: [
            {
              category: 'Content',
              priority: 'high',
              description: 'Add more relevant keywords to improve search ranking'
            },
            {
              category: 'Technical',
              priority: 'high',
              description: 'Implement structured data markup'
            },
            {
              category: 'Performance',
              priority: 'medium',
              description: 'Optimize images and enable compression'
            },
            {
              category: 'Mobile',
              priority: 'medium',
              description: 'Improve mobile responsiveness'
            }
          ],
          technical: {
            metaTags: true,
            structuredData: false,
            sitemap: true,
            robotsTxt: true,
            ssl: true,
            mobileFriendly: true,
            pageSpeed: Math.floor(Math.random() * 30) + 70, // 70-100
          },
        });
        setIsAnalyzing(false);, 2000);;

    analyzeSEO();, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600',
    if (score >= 70) return 'text-yellow-600',
    return 'text-red-600', };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800',
    if (score >= 70) return 'bg-yellow-100 text-yellow-800',
    return 'bg-red-100 text-red-800', };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info': return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default: return <CheckCircle className="h-4 w-4 text-gray-500" />, }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800',
      case 'medium': return 'bg-yellow-100 text-yellow-800',
      case 'low': return 'bg-green-100 text-green-800',
      default: return 'bg-gray-100 text-gray-800', }
  };

  if (isAnalyzing) {
    return (
      <Card className="w-full max-w-4xl mx-auto mb-8">
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Analyzing SEO...</p>
          </div>
        </CardContent>
      </Card>
    );

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* SEO Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            SEO Analysis Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className={`text-6xl font-bold ${getScoreColor(analysis.score)} mb-4`}>
              {analysis.score}
            </div>
            <Badge className={`${getScoreBadge(analysis.score)} text-lg px-4 py-2`}>
              {analysis.score >= 90 ? 'Excellent' : analysis.score >= 70 ? 'Good' : 'Needs Improvement'}
            </Badge>
            <div className="mt-4">
              <Progress value={analysis.score} className="h-3" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Meta Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Current Meta Tags</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Title</label>
            <div className="mt-1 p-3 bg-gray-50 rounded border">
              <p className="text-sm">{analysis.title}</p>
              <p className="text-xs text-gray-500 mt-1">
                {analysis.title.length} characters (recommended: 50-60)
              </p>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-600">Description</label>
            <div className="mt-1 p-3 bg-gray-50 rounded border">
              <p className="text-sm">{analysis.description}</p>
              <p className="text-xs text-gray-500 mt-1">
                {analysis.description.length} characters (recommended: 150-160)
              </p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Keywords</label>
            <div className="mt-1 flex flex-wrap gap-2">
              {analysis.keywords.map((keyword, index) => (
                <Badge key={index} variant="outline">{keyword}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issues */}
      <Card>
        <CardHeader>
          <CardTitle>Issues Found</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.issues.map((issue, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                {getIssueIcon(issue.type)}
                <div className="flex-1">
                  <p className="font-medium">{issue.message}</p>
                  <p className="text-sm text-gray-600 mt-1">{issue.suggestion}</p>
                </div>
                <Button variant="outline" size="sm">
                  Fix
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical SEO */}
      <Card>
        <CardHeader>
          <CardTitle>Technical SEO</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Meta Tags</span>
                <Badge variant={analysis.technical.metaTags ? 'default' : 'destructive'}>
                  {analysis.technical.metaTags ? '✓' : '✗'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Structured Data</span>
                <Badge variant={analysis.technical.structuredData ? 'default' : 'destructive'}>
                  {analysis.technical.structuredData ? '✓' : '✗'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Sitemap</span>
                <Badge variant={analysis.technical.sitemap ? 'default' : 'destructive'}>
                  {analysis.technical.sitemap ? '✓' : '✗'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Robots.txt</span>
                <Badge variant={analysis.technical.robotsTxt ? 'default' : 'destructive'}>
                  {analysis.technical.robotsTxt ? '✓' : '✗'}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">SSL Certificate</span>
                <Badge variant={analysis.technical.ssl ? 'default' : 'destructive'}>
                  {analysis.technical.ssl ? '✓' : '✗'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Mobile Friendly</span>
                <Badge variant={analysis.technical.mobileFriendly ? 'default' : 'destructive'}>
                  {analysis.technical.mobileFriendly ? '✓' : '✗'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Page Speed</span>
                <Badge variant={analysis.technical.pageSpeed >= 80 ? 'default' : 'destructive'}>
                  {analysis.technical.pageSpeed}/100
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority}
                    </Badge>
                    <span className="text-sm font-medium">{rec.category}</span>
                  </div>
                  <p className="text-sm text-gray-600">{rec.description}</p>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );;

export default SEOOptimizer;