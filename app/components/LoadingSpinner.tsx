import React from 'react'; interface Loading Spinner Props {size?: 'sm' | 'md' | 'lg'; full Screen?: boolean; message?: string; }const Loading Spinner: React.FC<Loading Spinner Props> = ({size = 'md', full Screen = false, message = 'Loading...' } )=> {const size Classes= {sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' }; const spinner = (<div className="flex flex col items center justify-center space-y-4"> <div className= {`$ {size Classes [size ]}animate-spin rounded-full border-2 border-gray-300 border-t-purple-600` }>
          </div> {message && (<p className="text gray 600 text-sm font-medium"> {message }</p> )}
          </div> ); if (full Screen ){return (<div className="fixed inset 0 bg slate-900/80 backdrop-blur-sm flex items-center justify-center z-50"> <div className="bg slate 800 rounded-lg p-8 shadow-xl"> {spinner }
          </div> 
          </div> ); }return spinner; }; export default Loading Spinner;
