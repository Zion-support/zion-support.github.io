import React from 'react'
export default function Loading() {
  return (
    <div className='text-left'>
      <div className='text-left'>
        <div className='text-left'>
          {/* Spinning circle */}
          <div className='text-left'></div>
          {/* Pulse animation */}
          <div className='text-left'></div>
        </div>
        <h2 className='text-left'>Loading...</h2>
        <p className='text-left'>Preparing your experience</p>
        {/* Loading dots */}
        <div className='text-left'>
          <div className='text-left' style={{ animationDelay: '0ms' }}></div>
          <div className='text-left' style={{ animationDelay: '150ms' }}></div>
          <div className='text-left' style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
import React from 'react' export default function Loading() { return ( <div className="text-left" > <div className="text-left" > <div className="text-left" > {/* Spinning circle */} <div></div> {/* Pulse animation */} <div></div> </div> <h2 className="text-left" >Loading...</h2> <p className="text-left" >Preparing your experience</p> {/* Loading dots */} <div className="text-left" >' <div></div>' <div></div>' <div></div> </div> </div> </div> ); } '