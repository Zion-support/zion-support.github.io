








      await login(data.email, data.password)
    } finally {
      setIsSubmitting(false)










type LoginFormValues = z && z.infer<typeof loginSchema>;










                  />;
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;



                    ) :(;
                      <Eye className="h-4 w-4" />;
                    )}
                    <span className="sr-only">;
                      {showPassword ? "Hide password" :"Show password"}
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
                    onClick={() => setShowPassword(!showPassword)}

                  >;
                    {showPassword ? (;
                      <EyeOff className="h-4 w-4" />;


;
        <Button;
          type="submit";
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
          disabled={isLoading || isSubmitting}
        >;
          {isLoading || isSubmitting ? "Logging in..." :"Login"}
        </Button>;
}
;



