import React, { useState, useEffect } from 'react' import { motion, AnimatePresence } from 'framer-motion' import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'  interface Testimonial {;
   id: string;
   name: string;
   title: string;
   comp: string;
   compLogo?: string;
"
}