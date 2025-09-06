</div> </div> </div>) };

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className='enhanced-card flex items-center justify-between'>
import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
import StarRating from './StarRating';
import { Star } from 'lucide-react';
type Props = {
  summary: ReviewsSummary

};

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (

          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>