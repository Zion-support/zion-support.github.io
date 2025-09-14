'use client';

import React from 'react';
import Link from 'next/link';
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
    </motion.section>
  );
}