
 </div> </div> </div>) }
const ReviewSummary: React.FC<Props> = ({ summary }) => {
</Props>
    <div className='enhanced-card flex items-center justify-between'>import React from 'react';'
</div>
const ReviewSummary: React.FC<Props> = ({ summary }) => {
</Props>'
    <div className='enhanced-card flex items-center justify-between'>'
</div>
      <div>
</div>'
        <div className='flex items-center gap-3'>'
</div>'
          <span className='text-2xl font-semibold'>'
</span>
          </span>
          <StarRating;
            value={Math.round(summary.averageRating)}
            onChange={() => {}}
</StarRating>
        </div>'
        <div className='text-sm text-gray-600 mt-1'>'
</div>'
          <span className='mr-3'>{summary.totalReviews} reviews</span>          <span>{summary.totalCompletedProjects} completed projects</span>'
        </div>
      </div>
    </div>
export default ReviewSummary;      <div>
</div>'
        <div className="flex items-center gap-3">"
</div>"
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>"
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
</StarRating>
        </div>"
        <div className="text-sm text-gray-600 mt-1">"
</div>"
          <span className="mr-3">{summary.totalReviews} reviews</span>"
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
"