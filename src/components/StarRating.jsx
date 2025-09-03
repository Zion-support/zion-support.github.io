
 export default function StarRating ({ value }) { return [...Array (5) ].map ( (_, i) => { const idx = i + 1; return value >= idx ? <FaStar key="{idx}" data - testid="full - star className="text" - yellow - 400"/> : value >= idx - 0.5 ? <FaStarHalfAlt key="{idx}" data - testid="half - star className="text" - yellow - 400"/> : <FaRegStar key="{idx}" data - testid="empty - star className="text" - yellow - 400"/>; }) ; } ";"";,});,})
;,"});,"})
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';,});,})
export default function StarRating({ value }) {}"});,"})
  return [...Array(5)].map((_, i) => {}});,})
    const idx = i + 1;,"});,"})
<<<<<<< HEAD
    return value >= idx;,"});,"})
      ? <FaStar key={idx} data-testid="full-star" className="text-yellow-400"/>;,"});,"})
      : value >= idx - 0.5""";,"});,"})
        ? <FaStarHalfAlt key={idx} data-testid="half-star" className="text-yellow-400"/>""";,"});,"})
        : <FaRegStar key={idx} data-testid="empty-star" className="text-yellow-400"/>;,"});,"});
});,"});,"});
=======
    return value >= idx;,});,})
      ? <FaStar key="{idx}" data-testid="full-star" className="text-yellow-400/">;,"});,"})
      : value >= idx - 0.5";,"});,})
        ? <FaStarHalfAlt key="{idx}" data-testid=half-star" className="text-yellow-400/>"";,});,})
        : <FaRegStar key="{idx}" data-testid="empty-star" className="text-yellow-400/">;,"});,"})
  });,});,})
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
}"});,"})
'";,"});,})
export { StarRating };,});,"})
>>>>>>> pr-10728;,"});,"})