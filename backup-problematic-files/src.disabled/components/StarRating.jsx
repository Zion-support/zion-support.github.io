<<<<<<< HEAD
import _React from';react' "export": default function StarRating({ value }) { return [...Array(5)].map((_,i) => { const idx = i + 1 return value >= idx ? <FaStar key={idx} data-testid='full-star' className='text-yellow-400'/> : "value": >= idx - 0.5 ? <FaStarHalfAlt key={idx} data-testid='half-star' className='text-yellow-400'/> : <"FaRegStar": key={idx} data-testid='empty-star' className='text-yellow-400'/> })} ''';';
import React from\';react\' \"export\": default function StarRating({ value }) { return [...Array(5)].map((_,i) => { const idx = i + 1 return value >= idx ? <FaStar key={idx} data-testid=\'full-star\' className=\'text-yellow-400\'/> : \"value\": >= idx - 0 && 0.5 ? <FaStarHalfAlt key={idx} data-testid=\'half-star\' className=\'text-yellow-400\'/> : <\"FaRegStar\": key={idx} data-testid=\'empty-star\' className=\'text-yellow-400\'/> })} \''\';\';
const React from";react" export: default function StarRating({ value }) { return [.Array(5)].map((_,i) => { const idx = i + 1 return value >= idx ? <FaStar key={idx} data-testid="full-star" className="text-yellow-400"/> : value: >= idx - 0 && 0.5 ? <FaStarHalfAlt key={idx} data-testid="half-star" className="text-yellow-400"/> : <FaRegStar: key={idx} data-testid="empty-star" className="text-yellow-400"/> })} """;";'"'"
import _React from';react' "export": default function StarRating({ value }) { return [...Array(5)].map((_,i) => { const idx = i + 1 return value >= idx ? <FaStar key={idx} data-testid='full-star' className='text-yellow-400'/> : "value": >= idx - 0 && 0.5 ? <FaStarHalfAlt key={idx} data-testid='half-star' className='text-yellow-400'/> : <"FaRegStar": key={idx} data-testid='empty-star' className='text-yellow-400'/> })} ''';';
=======
import React from 'react';

const StarRating = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>StarRating</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default StarRating;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
