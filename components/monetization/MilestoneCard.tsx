return (<div className="border rounded-lg p-4 bg-white shadow-sm" > <div className="flex items-start justify-between" > <div> <div className= {
  'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300') 
}title= {
  step 
}/> {
  idx < statusSteps.length - 1 && (<div className= {
  'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300') 
}/>) 
}</div>) ) 
}</div> </a> </li>) ) 
}</ul> </div>) 
}</div>) 
}> Mark In Progress </button>) 
}> Submit Work </button>) 
}> Approve </button>) 
}> Mark as Paid </button>) 
}</div> </div>) 
}