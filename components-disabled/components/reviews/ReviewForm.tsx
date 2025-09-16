import StarRating from './StarRating';

export type ReviewFormValues = {
  projectId: string;
  fromRole: 'client' | 'talent';
  fromId: string;
  rating: number;
  text: string;
  categories?: {
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
