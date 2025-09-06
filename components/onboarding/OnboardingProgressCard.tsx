 <div className= {
  `h-2 rounded-full bg-gradient-to-r $ {
  highlightColorClass 
}` 
}style= {
  {
  width: `$ {
  percentage 
}%` 
}
}/> </div> <PartyPopper size= {
  18 
}/> <span className="text-sm" >All steps completed — great job!</span> </div>) : null 
}) 
}<span className= {
  step.completed ? 'line-through opacity-70' : '' 
}> {
  step.label 
}</span> </div> {
  !step.completed && step.ctaHref && step.ctaLabel ? (<Link href= {
  step.ctaHref 
}> </a> </a>) : null 
}</li>) ) 
}</ul> </a> </a> </div>) : null 
}</div>) 
}