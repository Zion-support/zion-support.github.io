
      }
      ;
      const data = await response.json(),;
      return {;
        success:true,;
        message:data.message;
      },;
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      return {;
        success:false,;
        message:"I'm experiencing technical difficulties. Please try again later.";
      },;
    }

          {isLoading && (;
            <div className="flex items-center justify-center py-2">;
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )}
        </div>;
      </ScrollArea>;

              Email Support;
            </Button>;
          </div>;
        </div>;
      )}

            <Send className="h-4 w-4" />;
          </Button>;
        </form>;
      </div>;
    </div>;

}