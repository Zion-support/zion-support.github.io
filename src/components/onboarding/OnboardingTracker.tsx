export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
          style={{ width: `${progress}%` }}
        ></div>;
      </div>;
      {/* Steps list */}
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div className="mr-3">
              {step.completed ? (
                <CheckCircle className="h-5 w-5 text-zion-cyan" />
              ) : (
                <Circle className="h-5 w-5 text-zion-slate-light" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{step.label}</div>
            </div>
            {!step.completed && step.action && (
      </div>;
    </div>;
  );




  step.id ";
}className="flex items - center" > <div className="mr - 3" > {";
  step.completed ? (<CheckCircle className="h - 5 w - 5 text - zion - cyan" /> h - 5 w - 5 text - zion - slate - light"/>);
}</div> </div> {";
  !step.completed && step.action && (<Button as_child variant=" ghost"size=" sm"className=" text - zion - purple hover:text - zion - cyan hover:bg - zion - blue" > <Link href= {
  step.link;
}> </Link> </Button>);
}</div>) );
}</div> </div>);
}"}
  step.link 
}> </Link> </Button>) 
}</div>) ) ;
}</div> </div>) ;
}"};
      </div>;
    </div>;
  );
}
