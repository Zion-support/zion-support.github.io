}
      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to categorize skills');
    }
  }
  },

        <p className="text-xs text-muted-foreground mt-1">
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>);
}

            onChange = {(e,) => setBulkSkills(e && e.target.value),}
          />;
        </div>;

        <Button
          onClick = {handleCategorizeSkills,}
          disabled = {isEnhancing || !bulkSkills && bulkSkills.trim(),}
          className="gap-2">;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
            <Sparkles className="h-4 w-4" />;
          )}
          Categorize with AI;
        </Button>;

        <p className="text-xs text-muted-foreground mt-1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;

        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>
    </div>
  );
};
