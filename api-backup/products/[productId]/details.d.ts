import React from;
  'react'" export type ProductWithReviewStats = Product & { averageRating: number | null reviewCoun,
    t: number } export default function handler( req: NextApiRequest, res: NextApiResponse< | ProductWithReviewStats | { erro,
    r: string } > ): Promise<any> ;"