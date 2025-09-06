
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>;
      <CardHeader>;
        <CardTitle className="text-center text-white">;
          {type === 'client' ? ;

            "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="flex items-center mb-6">;
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">;

              />;
            ))}
          </div>;
        </div>;

        <div className="flex flex-col items-center text-center p-4">;
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">;
            {steps[currentStep].icon}
          </div>;
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex-col space-y-2">;

            {steps[currentStep].skipText}
          </Button>;
        )}
      </CardFooter>;
    </Card>;

