interface GeneratedContent {

  description: string
  tags: string[]
  suggestedPrice: {
    min: number

    max: number
  }
  key_points: string[];
}
interface AIListingGeneratorProps {

    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  }
}

      toast({
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error })
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsLoading (false);
    }
      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
      toast({;
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error }),;
      toast({;
        title: "Generation Failed",;
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
    <div className="space-y-6">;
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;
        <CardHeader>;
          <CardTitle className="flex items-center text-white">;
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text-sm text-zion-slate-light">;
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;
      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
}) => {
  setIsLoading (true);
try {
  const {
}catch (error) {';
  logErrorToProduction ('Error generating content:', {
  data: error;
});
toast ({
}finally {
  setIsLoading (false);
}
}
}
}
}
