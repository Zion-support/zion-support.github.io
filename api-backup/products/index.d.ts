import React from;
  'react'" export type ProductWithReviewStats = Product & { averageRating: number | null reviewCount: number titl,
    e: string category?: string images?: { ur,
    l: string alt?: string }[] price?: number | null currency?: string tags?: string[] } export default function handler( req: NextApiRequest, res: NextApiResponse< | ProductWithReviewStats[] | { erro,
    r: string } > ): Promise<any> ;"