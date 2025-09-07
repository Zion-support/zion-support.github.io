{/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">"
</div>
        <div;"
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out""
      {/* Steps list */}"
      <div className="space-y-3">;"
</div>"
          <div key={step && step.id} className="flex items-center">;"
            <div className="mr-3">;"
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;"
"
                <Circle className="h-5 w-5 text-zion-slate-light" />;"

            </div>;"
            <div className="flex-1">;"
              <div className="text-sm font-medium text-white">{step && step.label}</div>;"
            </div>;
              <Button;
                asChild;"
                variant="ghost"""
                size="sm"""
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue">;"

                <Link href={step && step.link}>;
                  {step && step.action} <ArrowRight className="ml-1 h-4 w-4" />;"

                ;
    <div className={cn ("rounded - lg border border - zion - blue - light bg - zion - blue - dark / 60 p - 4 md:p - 6", class_name)}>;"
      <div className="flex items - center justify - between mb - 4">;"
        <h3 className="text - lg font - medium text - white">{title}</h3>;""
        <div className="text - sm font - medium text - zion - cyan">{progress}% Complete</div>;"
      <div className="w - full h - 2 bg - zion - blue rounded - full mb - 5">;"
          className="h - 2 bg - gradient - to - r from - zion - purple to - zion - cyan rounded - full transition - all duration - 500 ease - out";"
          style={{ width: `${progress}%` }}
        ></div>;
      <div className="space - y-3">;"
          <div key={step.id} className="flex items - center">;"
            <div className="mr - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan" />) : ("
)"
                <Circle className="h - 5 w - 5 text - zion - slate - light" />)}"

            <div className="flex - 1">;"
              <div className="text - sm font - medium text - white">{step.label}</div>;"
                as_child;"
                variant="ghost";""
                size="sm";""
                className="text - zion - purple hover:text - zion - cyan hover:bg - zion - blue";"
              >;

                <Link href={step.link}>;
                  {step.action} <ArrowRight className="ml - 1 h - 4 w - 4" />;"

              )}
          </div>))}
    </div>);
}></div> </div> {"
}<div className="space-y-3" > {"
  steps.map ( (step) => (<div key= {


  step.link;)
}>  ) 
}</div>) ) ;
}</div> </div>) ;
}className="flex items - center" > <div className="mr - 3" > {";"
  step.completed ? (<CheckCircle className="h - 5 w - 5 text - zion - cyan" /> h - 5 w - 5 text - zion - slate - light"/>);"
}</div> </div> {";""
  !step.completed && step.action && (<Button as_child variant=" ghost"size=" sm"className=" text - zion - purple hover:text - zion - cyan hover:bg - zion - blue" > <Link href= {"
)
}>  );
}</div>) );
}</div> </div>);"`;