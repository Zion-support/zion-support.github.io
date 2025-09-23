import StarRating from './StarRating';
import type { PublicReview } from '../../types/reviews';

type Props ={
  review: PublicReview;
  onReport?: (id: string) => void;
};

