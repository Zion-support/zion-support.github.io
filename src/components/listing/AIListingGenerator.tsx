import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LoadingIcon } from '@/components/icons';

interface AIListingGeneratorProps {
  onGenerate?: (listing: GeneratedListing) => void;
  className?: string;
}

interface GeneratedListing {
  title: string;
  description: string;
  price: string;
  category: string;
  tags: string[];
  features: string[];
  requirements: string[];
}

export const AIListingGenerator: React.FC<AIListingGeneratorProps> = ({
  onGenerate,
  className,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [generatedListing, setGeneratedListing] = useState<GeneratedListing | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a prompt for the AI to generate a listing.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      // Simulate AI generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock generated listing
      const mockListing: GeneratedListing = {
        title: `AI Generated: ${prompt.split(' ').slice(0, 3).join(' ')}`,
        description: `This is an AI-generated listing based on your prompt: "${prompt}". It includes all the essential details and features that would make this listing attractive to potential customers.`,
        price: '$99.99',
        category: 'AI Services',
        tags: ['AI', 'Generated', 'Custom'],
        features: [
          'AI-powered content generation',
          'Customizable templates',
          'Real-time editing',
          'Export to multiple formats'
        ],
        requirements: [
          'Basic understanding of the subject',
          'Clear project requirements',
          'Access to internet connection'
        ]
      };

      setGeneratedListing(mockListing);
      onGenerate?.(mockListing);
      
      toast({
        title: 'Success',
        description: 'AI listing generated successfully!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate listing. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUseListing = () => {
    if (generatedListing) {
      // This would typically populate a form or trigger some action
      toast({
        title: 'Listing Used',
        description: 'The generated listing has been applied to your form.',
      });
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>AI Listing Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="prompt">Describe what you want to create</Label>
          <Textarea
            id="prompt"
            placeholder="e.g., A professional web development service for small businesses..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
          />
        </div>
        
        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <LoadingIcon className="w-4 h-4 mr-2" />
              Generating...
            </>
          ) : (
            'Generate Listing'
          )}
        </Button>

        {generatedListing && (
          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg">Generated Listing</h3>
            
            <div className="space-y-2">
              <div>
                <Label className="text-sm font-medium">Title</Label>
                <p className="text-sm">{generatedListing.title}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Description</Label>
                <p className="text-sm">{generatedListing.description}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Price</Label>
                <p className="text-sm font-semibold text-green-600">{generatedListing.price}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Category</Label>
                <p className="text-sm">{generatedListing.category}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Tags</Label>
                <div className="flex flex-wrap gap-1 mt-1">
                  {generatedListing.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Features</Label>
                <ul className="text-sm list-disc list-inside">
                  {generatedListing.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Requirements</Label>
                <ul className="text-sm list-disc list-inside">
                  {generatedListing.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleUseListing} size="sm">
                Use This Listing
              </Button>
              <Button 
                onClick={() => setGeneratedListing(null)} 
                variant="outline" 
                size="sm"
              >
                Generate New
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIListingGenerator;