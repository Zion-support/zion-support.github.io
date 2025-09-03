import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
,;
    {};
},;
    {};
},;
    {};
},;
    {};
};,
}, []);, []);
        if(!isAutoPlaying) return;
        const interval = setInterval(() => {};
            setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length) }, 5000) ;
        return () => clearInterval(interval) }, [isAutoPlaying, filteredTestimonials.length]) ;
    const nextTestimonial = () => {};
};
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length) };
    const prevTestimonial = () => {};
};
        setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length) };
    const toggleLike = (testimonialId) => {};
                newSet.delete(testimonialId)}
            else {};
                newSet.add(testimonialId)}
            return newSet})};
    const renderStars = (rating) => {};
        return Array.from({ length: 5 }, (_, i) => (<Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}/>))};
    const containerVariants = {};
        hidden: { opacity: 0 },;
        visible: {};
};
    const itemVariants = {};
},;
        visible: {};
};";
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">;
      {/* Enhanced background with animated elements */}";
      <div className="absolute inset-0">";
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 animate-pulse"></div>";
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>";
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>;
      </div>;
";

export default Component;
}}}}}