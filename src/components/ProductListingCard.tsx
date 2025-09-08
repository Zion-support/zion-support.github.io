import React, { useState } from 'react';
import { useNavigate, Link  } from 'react-router-dom.ts';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { ProductListing  } from '@/types/listings';
import { DollarSign  } from 'lucide-react';
import { RatingStars  } from '@/components/RatingStars';
import { FavoriteButton  } from '@/components/FavoriteButton';
import { useDispatch  } from 'react-redux.ts';
import type { AppDispatch } from '@/store';
import { addItem  } from '@/store/cartSlice';
import Image from 'next/image.ts'; // Import next/image



