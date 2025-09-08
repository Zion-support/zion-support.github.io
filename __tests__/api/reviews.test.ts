import type { NextApiRequest, NextApiResponse } from 'next'
import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId]
import {
  PrismaClient,
  ProductReview,
  User as PrismaUser,
  Prisma
} from '@prisma/client'; // Import Prisma types
import type {
  User as SupabaseUser,
  Session,
  AuthError
<<<<<<< HEAD
} from '@supabase/supabase-js'; // Supabase typesimport reviewsHandler from '@/pages/api/reviews'
=======
} from '@supabase/supabase-js'; // Supabase types
import reviewsHandler from '@/pages/api/reviews'
>>>>>>> origin/main
import productReviewsHandler from '@/pages/api/reviews/[productId]'
} from '@prisma/client'
import { supabase } from '@/integrations/supabase/client'
} from '@supabase/supabase-js'
<<<<<<< HEAD
import { describe, it, expect, beforeEach, vi } from 'vitest'jest.mock('@prisma/client'
          this.name = 'PrismaClientKnownRequestError'
jest.mock('@/integrations/supabase/client'

=======
import { describe, it, expect, beforeEach, vi } from 'vitest'



jest.mock('@prisma/client'
          this.name = 'PrismaClientKnownRequestError'
jest.mock('@/integrations/supabase/client'



describe('/api/reviews API Endpoint'
  describe('POST /api/reviews'
    it('should successfully create a review (201)'
        "email"
        "name"
        "passwordHash"
        "role"
        "userType"
        "productId"

        "comment"'"
        user: { id: 'supaUserId', "email"
        "access_token"
        "refresh_token"
        "token_type"
        "method"'"body": { productId: 'prod1', "rating": 5, "comment"
          "comment"'"
        user: { id: 'supaUserId', "email"

        "access_token"
        "refresh_token"
        "token_type"
        "email"
            "target"
        "method"
          "comment"
        "error"

        "method"'"body": { productId: 'prod1', "rating": 6, "comment"

        "error"
        "method"
        "error"
        "method"
        "error"
        "access_token"
        "refresh_token"
        "token_type"
        "method"
        "error"
        "access_token"
        "refresh_token"
        "token_type"
        "method"
        "error"
          "id"
        "method"
          "where"
        "method"
        "method"
import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews
>>>>>>> origin/main
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId]
import {
  PrismaClient,
  ProductReview,
  User as PrismaUser,
  Prisma
} from '@prisma/client'; // Import Prisma types
  User as SupabaseUser,
  Session,
  AuthError
} from '@supabase/supabase-js'; // Supabase types

=======
        "error"

>>>>>>> origin/cursor/delete-old-data-records-6bba
// Mock Prisma Client

      findMany: jest.fn(),

    },
    user: {
      findUnique: jest.fn();,
    },
    $disconnect: jest.fn();,
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  };
  return {
  // TODO: Implement;
}"
    "PrismaClient": jest.fn(() => mockPrismaClient),"
    // Mock Prisma known request error for testing specific error codes;"
    "Prisma": {"
      PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error {
  // TODO: Implement
        code: string;
        meta?: Record<string, unknown>;
</string>
          meta?: Record<string, unknown>
        ) {
          super(message);
          this.code = code;
          this.meta = meta;

          this.name = 'PrismaClientKnownRequestError'}
      }
    }
  }})

          this.name = 'PrismaClientKnownRequestError';
        }
      },
    },
  };
});

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

// Mock Supabase Client
jest.mock('@/integrations/supabase/client', () => ({
  "supabase": {
    auth: {

      getSession: jest.fn(),

    },
  },
}));

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

// Define expected response types
interface ErrorResponse {
  "error": string
  details?: string
}
// For POST /api/reviews, success is the created ProductReview
type PostReviewSuccessResponse = ProductReview
// For GET /api/reviews/[productId], success is ProductReview[]
type GetReviewsSuccessResponse = ProductReview[]
describe('/api/reviews API Endpoint', () => {
  let "prismaMock": PrismaClient; // Use PrismaClient type for the mock
  beforeEach(() => {
    prismaMock = new PrismaClient()
    (prismaMock.productReview.create as jest.Mock).mockReset()
    (prismaMock.productReview.findMany as jest.Mock).mockReset()
    (prismaMock.user.findUnique as jest.Mock).mockReset()
    (prismaMock.$disconnect as jest.Mock).mockReset(); // This is not typically called in handlers
    (supabase.auth.getSession as jest.Mock).mockReset()
  });

  describe('POST /api/reviews', () => {
    it('should successfully create a review (201)', async () => {
      const "mockPrismaUser": PrismaUser = {

        "email": 'test@example.com',
        "name": 'Test User',
        "passwordHash": 'hashedpassword',
        "createdAt": new Date(),
        "updatedAt": new Date(),
        "avatarUrl": null,
        "bio": null,
        "companyId": null,
        "headline": null,
        "lastLoginAt": null,
        "notifications": {}
        "profileComplete": false,
        "resetToken": null,
        "resetTokenExpiry": null,
        "role": 'USER',
        "softDeleted": false,
        "userType": 'individual'

        email: 'test@example.com',
        name: 'Test User',
        passwordHash: 'hashedpassword',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarUrl: null,
        bio: null,
        companyId: null,
        headline: null,
        lastLoginAt: null,
        notifications: {},
        profileComplete: false,
        resetToken: null,
        resetTokenExpiry: null,
        role: 'USER',
        softDeleted: false,
        userType: 'individual',
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
      };
      const "mockReviewResponse": ProductReview = {
        id: 'review1',

        "productId": 'prod1',
        "userId": 1,
        "rating": 5,
        "comment": 'Great!',
        "createdAt": new Date(),
        "updatedAt": new Date()
      };
      const "mockSupabaseSession": Session = {
        user: { id: 'supaUserId';, "email": 'test@example.com' } as SupabaseUser,
        "access_token": 'token',
        "refresh_token": 'ref',
        "expires_in": 3600,
        "token_type": 'bearer',
        "expires_at": Date.now() + 3600000
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { session: mockSupabaseSession ;},
        "error": null
      })
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser)
      (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse)
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod,
        "body": { productId: 'prod1';, "rating": 5, "comment": 'Great!' }
      })

      };

      const mockSupabaseSession: Session = {
        user: { id: 'supaUserId';, email: 'test@example.com' ;} as SupabaseUser,
        access_token: 'token';,
        refresh_token: 'ref';,
        expires_in: 3600;,
        token_type: 'bearer';,
        expires_at: Date.now() + 3600000;,
      };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession ;},
        error: null;,
      });

      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(
        mockPrismaUser
      );
      (prismaMock.productReview.create as jest.Mock).mockResolvedValue(
        mockReviewResponse
      );

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod;,
        body: { productId: 'prod1';, rating: 5;, comment: 'Great!' ;},
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(201)
      expect(res._getJSONData()).toEqual(mockReviewResponse); // Assuming ProductReview is directly returned
      expect(prismaMock.productReview.create).toHaveBeenCalledWith({
        "data": {

          "rating": 5,
          "comment": 'Great!',
          "userId": mockPrismaUser.id
        }
      })
    });

  it('should fail if user already reviewed the product (409)', async () => {
      const "mockSupabaseSession": Session = {
        user: { id: 'supaUserId';, "email": 'test@example.com' } as SupabaseUser,
        "access_token": 'token',
        "refresh_token": 'ref',
        "expires_in": 3600,
        "token_type": 'bearer',
        "expires_at": Date.now() + 3600000
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { session: mockSupabaseSession ;},
        "error": null
      })
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({
        "id": 1,
        "email": 'test@example.com'
      })

          rating: 5,
          comment: 'Great!',
          userId: mockPrismaUser.id,

        },
      });
    });

    it('should fail if user already reviewed the product (409)', async () => {
      const mockSupabaseSession: Session = {
        user: { id: 'supaUserId';, email: 'test@example.com' ;} as SupabaseUser,
        access_token: 'token';,
        refresh_token: 'ref';,
        expires_in: 3600;,
        token_type: 'bearer';,
        expires_at: Date.now() + 3600000;,
      };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession ;},
        error: null;,
      });

      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({
        id: 1;,
        email: 'test@example.com';,
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      (prismaMock.productReview.create as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError(
          'Unique constraint failed',
          'P2002',
          'client-version',
          {

            target: ['productId', 'userId'],
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

          }
        )
      )
<<<<<<< HEAD

      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod,
        "body": {

          "rating": 5,
          "comment": 'Another great review!'

=======
        "method": 'POST' as RequestMethod,'
        "body": {"
          }
          "productId": 'prod1','
          "rating": 5,"
          "comment": 'Another great review!''
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
      })

          rating: 5,
          comment: 'Another great review!',

        },
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(409)
      expect(res._getJSONData()).toEqual({

        "error": 'You have already reviewed this product.'
      })
<<<<<<< HEAD

    });

  it('should fail with invalid rating (400) - too high', async () => {
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod,
        "body": { productId: 'prod1';, "rating": 6, "comment": 'Too good!' }

=======
    })
    it('should fail with invalid rating (400) - too high', async () => {'
      }
        "method": 'POST' as RequestMethod,'
        "body": { "productId": 'prod1', "rating": 6, "comment": 'Too good!' }'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      })

        error: 'You have already reviewed this product.',

      });
    });

    it('should fail with invalid rating (400) - too high', async () => {
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod;,
        body: { productId: 'prod1';, rating: 6;, comment: 'Too good!' ;},
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({

        "error": 'Rating is required and must be a number between 1 and 5.'
      })
<<<<<<< HEAD

    });

  it('should fail with invalid rating (400) - not a number', async () => {
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod,
        "body": {
          productId: 'prod1'
          rating: 'five-stars'
          comment: 'Text rating!';

=======
    })
    it('should fail with invalid rating (400) - not a number', async () => {'
      }
        "method": 'POST' as RequestMethod,'
        "body": {"
          }
          "productId": 'prod1''
          "rating": 'five-stars''
          "comment": 'Text rating!''
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
      })

        error: 'Rating is required and must be a number between 1 and 5.',

      });
    });

    it('should fail with invalid rating (400) - not a number', async () => {
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod;,
        body: {
          productId: 'prod1';,
          rating: 'five-stars';,
          comment: 'Text rating!';,
        },
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({

        "error": 'Rating is required and must be a number between 1 and 5.'
      })
    });

  it('should fail if not authenticated (401)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
<<<<<<< HEAD

        "data": { session: null ;}
        "error": null
      })
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod,
        "body": {
          productId: 'prod1'
          rating: 5
          comment: 'Trying to review without login';

=======
        "data": { "session": null }"
        "error": null"
     
})
        "method": 'POST' as RequestMethod,'
        "body": {"
          }
          "productId": 'prod1''
          "rating": 5,
"comment": 'Trying to review without login''
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
      })

        error: 'Rating is required and must be a number between 1 and 5.',

      });
    });

    it('should fail if not authenticated (401)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: null ;},
        error: null;,
      });

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod;,
        body: {
          productId: 'prod1';,
          rating: 5;,
          comment: 'Trying to review without login';,
        },
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(401)
      expect(res._getJSONData()).toEqual({

        "error": 'Not authenticated or session error.'
      })
    });

  it('should fail if Supabase user email is missing (401)', async () => {
      const "mockSupabaseSessionNoEmail": Session = {
        user: { id: 'supaUserId';, "email": undefined } as SupabaseUser
        "access_token": 'token',
        "refresh_token": 'ref',
        "expires_in": 3600,
        "token_type": 'bearer',
        "expires_at": Date.now() + 3600000
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { session: mockSupabaseSessionNoEmail ;}
        "error": null
      })
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod,
        "body": {
          productId: 'prod1'
          rating: 5
          comment: 'Review with no email in session';
        }
      })

        error: 'Not authenticated or session error.',

      });
    });

    it('should fail if Supabase user email is missing (401)', async () => {
      const mockSupabaseSessionNoEmail: Session = {
        user: { id: 'supaUserId';, email: undefined ;} as SupabaseUser,
        access_token: 'token';,
        refresh_token: 'ref';,
        expires_in: 3600;,
        token_type: 'bearer';,
        expires_at: Date.now() + 3600000;,
      };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSessionNoEmail ;},
        error: null;,
      });
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod;,
        body: {
          productId: 'prod1';,
          rating: 5;,
          comment: 'Review with no email in session';,
        },
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(401)
      expect(res._getJSONData()).toEqual({

        error: 'User email not found in session.',

      });
    });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    it('should fail if user not found in Prisma database (404)', async () => {
      const "mockSupabaseSession": Session = {
        user: {
          id: 'supaUserId'
          email: 'unknown@example.com';
        } as SupabaseUser
        "access_token": 'token',
        "refresh_token": 'ref',
        "expires_in": 3600,
        "token_type": 'bearer',
        "expires_at": Date.now() + 3600000
      }
<<<<<<< HEAD

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { session: mockSupabaseSession ;},
        "error": null

=======
        }
        "user": {
          }
          "id": 'supaUserId''
          "email": 'unknown@example.com''
       
} as SupabaseUser
        "access_token": 'token','
        "refresh_token": 'ref','
        "expires_in": 3600,"
        "token_type": 'bearer','
        "expires_at": Date.now() + 3600000"
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSession,"
},"error": null;"
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null)const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1';'
          }
          "rating": 5;
          "comment": 'User exists in Supa, not Prisma';'
        }
      })"id": 'supaUserId',"email": 'unknown@example.com';'
        } as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;'
      }(supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSession
},"error": null;
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null)const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1',"rating": 5,"comment": 'User exists in Supa, not Prisma';'
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(404)expect(res._getJSONData()).toEqual({"error": 'User not found in our database.';'
      })})})describe('GET /api/reviews/[productId]', () => {it('should successfully fetch reviews for a product (200)', async () => {const "mockReviewsList": ProductReview[] = [{"id": 'rev1';'
          }
          "productId": 'prod123';'
          "userId": 1;
          "rating": 5;
          "comment": 'Excellent!';'
          "createdAt": new Date()"updatedAt": new Date(
}
        {"id": 'rev2';'
          }
          "productId": 'prod123';'
          "userId": 2;
          "rating": 4;
          "comment": 'Very good.';'
          "createdAt": new Date()"updatedAt": new Date(
}
      ];
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList)const { req, res } = createMocks({"method": 'GET' as RequestMethod;'
        }
        "query": { "productId": 'prod123' }'
     
})"error": 'User not found in our database.';'
      })})})describe('GET /api/reviews/[productId]', () => {it('should successfully fetch reviews for a product (200)', async () => {const "mockReviewsList": ProductReview[] = [;'
        {"id": 'rev1',"productId": 'prod123',"userId": 1,"rating": 5,"comment": 'Excellent!',"createdAt": new Date(),"updatedAt": new Date(,'
},{"id": 'rev2',"productId": 'prod123',"userId": 2,"rating": 4,"comment": 'Very good.',"createdAt": new Date(),"updatedAt": new Date(,'
}
      ];(prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList;
      )const { req, res } = createMocks({"method": 'GET' as RequestMethod,"query": { "productId": 'prod123' }'
     
})await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(200)expect(res._getJSONData()).toEqual(mockReviewsList)expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(expect.objectContaining({"where": { "productId": 'prod123' }'
          "where": { "productId": 'prod123' }}),'
})it('should return an empty array if no reviews found (200)', async () => {(prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([])const { req, res } = createMocks({"method": 'GET' as RequestMethod;'
        }
        "query": { "productId": 'prodNonExistent' }'
     
})"method": 'GET' as RequestMethod,"query": { "productId": 'prodNonExistent' }'
     
})await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(200)expect(res._getJSONData()).toEqual([])})it('should fail if productId is missing (400)', async () => {const { req, res } = createMocks({"method": 'GET' as RequestMethod;'
        }
        "query":  
} // No productId;
      })"method": 'GET' as RequestMethod,"query":  ,'
}, // No productId;
      })await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(400)expect(res._getJSONData()).toEqual({"error": 'productId is required in the URL path and must be a string.';'
      })})})})"error";"
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { "productReview": { "create": jest.fn(),"findMany": jest.fn(),'
},"user": { "findUnique": jest.fn()
},$"disconnect": jest.fn() ;
  return { "PrismaClient": jest.fn(() => mockPrismaClient),"Prisma": { "PrismaClientKnownRequestError": class PrismaClientKnownRequestError extends Error { "code": string; meta?: Record<string,unknown>; constructor( "message": string,"code": string,"clientVersion": string,meta?: Record<string,unknown> ) { super(message)this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ "supabase": { "auth": { "getSession": jest.fn() } },'
})) interface ErrorResponse { "error": string details?: string;
}

type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let "prismaMock": PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset()(supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const "mockPrismaUser": PrismaUser = { "id": 1,"email": 'test@example.com',"name": 'Test User',"passwordHash": 'hashedpassword',"createdAt": new Date(),"updatedAt": new Date(),"avatarUrl": null,"bio": null,"companyId": null,"headline": null,"lastLoginAt": null,"notifications":  ,'
} "profileComplete": false,"resetToken": null,"resetTokenExpiry": null,"role": 'USER',"softDeleted": false,"userType": 'individual','
}

const "mockReviewResponse": ProductReview = { "id": 'review1',"productId": 'prod1',"userId": 1,"rating": 5,"comment": 'Great!',"createdAt": new Date(),"updatedAt": new Date();'
}

const "mockSupabaseSession": Session = { "user": { "id": 'supaUserId',"email": 'test@example.com',;'
} as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": mockSupabaseSession,'
},"error": null
}) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1',"rating": 5,"comment": 'Great!' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse)expect(prismaMock.productReview.create).toHaveBeenCalledWith({ "data": { "productId": 'prod1',"rating": 5,"comment": 'Great!',"userId": mockPrismaUser.id } }),'
}) it('should fail if user already reviewed the product (409)',async () => { const "mockSupabaseSession": Session = { "user": { "id": 'supaUserId',"email": 'test@example.com','
} as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": mockSupabaseSession,'
},"error": null
}) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ "id": 1,"email": 'test@example.com','
}) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ "target": ['productId,userId'] } ) ) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1',"rating": 5,"comment": 'Another great review!' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ "error": 'You have already reviewed this product.' }),'
}) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1',"rating": 6,"comment": 'Too good!' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ "error": 'Rating is required and must be a number between 1 and 5.' }),'
}) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1' "rating": 'five-stars' "comment": 'Text rating!' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ "error": 'Rating is required and must be a number between 1 and 5.' }),'
}) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": null } "error": null,'
}) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1' "rating": 5 "comment": 'Trying to review without login' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ "error": 'Not authenticated or session error.' }),'
}) it('should fail if Supabase user email is missing (401)',async () => { const "mockSupabaseSessionNoEmail": Session = { "user": { "id": 'supaUserId',"email": undefined,'
} as SupabaseUser "access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": mockSupabaseSessionNoEmail } "error": null,'
}) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1' "rating": 5 "comment": 'Review with no email in session' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ "error": 'User email not found in session.' }),'
}) it('should fail if user not found in Prisma database (404)',async () => { const "mockSupabaseSession": Session = { "user": { "id": 'supaUserId' "email": 'unknown@example.com','
} as SupabaseUser "access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": mockSupabaseSession,'
},"error": null
}) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1' "rating": 5 "comment": 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ "error": 'User not found in our database.' }) }),'
}) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const "mockReviewsList": ProductReview[] = [ { "id": 'rev1' "productId": 'prod123' "userId": 1 "rating": 5 "comment": 'Excellent!' "createdAt": new Date() "updatedAt": new Date() } { "id": 'rev2' "productId": 'prod123' "userId": 2 "rating": 4 "comment": 'Very good.' "createdAt": new Date() "updatedAt": new Date(),'
} ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ "method": 'GET' as RequestMethod "query": { "productId": 'prod123' },'
}) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ "where": { "productId": 'prod123' } }) ),'
}) it('should;'
  return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ "method": 'GET' as RequestMethod "query": { "productId": 'prodNonExistent' },'
}) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => {;'
}
const { req,res } = createMocks({ "method": 'GET' as RequestMethod "query": {},;'
}) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ "error": 'productId is required in the URL path and must be a string.' }) }) }),'
})"error";"
        "error";"
ursor/fix-website-loading-errors-and-merge-6662;
        "error";"
        "error";"
ursor/add-new-services-and-deploy-updates-0462;
ursor/integrate-build-improve-and-re-verify-8f7d;
        "error";"
        "error";"
        "error";"
ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;
        "error";"
        "error": 'productId is required in the URL path and must be a string.';'
      })})})})
>>>>>>> origin/cursor/delete-old-data-records-6bba
      })
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null)
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod,
        "body": {
          productId: 'prod1'
          rating: 5
          comment: 'User exists in Supa;, not Prisma'
        }
      })

        } as SupabaseUser,
        access_token: 'token';,
        refresh_token: 'ref';,
        expires_in: 3600;,
        token_type: 'bearer';,
        expires_at: Date.now() + 3600000;,
      };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession ;},
        error: null;,
      });

      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null);

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod;,
        body: {
          productId: 'prod1';,
          rating: 5;,
          comment: 'User exists in Supa;, not Prisma',
        },
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(404)
      expect(res._getJSONData()).toEqual({

        "error": 'User not found in our database.'
      })
    })
  });

  describe('GET /api/reviews/[productId]', () => {
    it('should successfully fetch reviews for a product (200)', async () => {
      const "mockReviewsList": ProductReview[] = [{
          id: 'rev1'
          productId: 'prod123'
          userId: 1
          rating: 5
          comment: 'Excellent!'
          createdAt: new Date()
          updatedAt: new Date();
        }
        {
          "id": 'rev2'
          productId: 'prod123'
          userId: 2
          rating: 4
          comment: 'Very good.'
          createdAt: new Date()
          updatedAt: new Date();
        }
      ]
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList)
<<<<<<< HEAD

      const { req, res } = createMocks({
        "method": 'GET' as RequestMethod
        query: { productId: 'prod123' ;}
      })

        error: 'User not found in our database.',

      });
    });
  });

  describe('GET /api/reviews/[productId]', () => {
    it('should successfully fetch reviews for a product (200)', async () => {
      const mockReviewsList: ProductReview[] = [
        {
          id: 'rev1';,
          productId: 'prod123';,
          userId: 1;,
          rating: 5;,
          comment: 'Excellent!';,
          createdAt: new Date();,
          updatedAt: new Date();,
        },
        {
          id: 'rev2';,
          productId: 'prod123';,
          userId: 2;,
          rating: 4;,
          comment: 'Very good.';,
          createdAt: new Date();,
          updatedAt: new Date();,
        },
      ];

      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(
        mockReviewsList
      );

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod;,
        query: { productId: 'prod123' ;},
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


=======
        "method": 'GET' as RequestMethod'
        }
        "query": { "productId": 'prod123' }'
     
})
>>>>>>> origin/cursor/delete-old-data-records-6bba
      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(mockReviewsList)
      expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(
        expect.objectContaining({

          where: { productId: 'prod123' },
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

        })
      )
    });

  it('should return an empty array if no reviews found (200)', async () => {
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([])
<<<<<<< HEAD

      const { req, res } = createMocks({

        "method": 'GET' as RequestMethod
        query: { productId: 'prodNonExistent' ;}
      })

        method: 'GET' as RequestMethod,
        query: { productId: 'prodNonExistent' },
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


=======
      }
        "method": 'GET' as RequestMethod'
        }
        "query": { "productId": 'prodNonExistent' }'
     
})
>>>>>>> origin/cursor/delete-old-data-records-6bba
      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual([])
<<<<<<< HEAD

    });

  it('should fail if productId is missing (400)', async () => {
      const { req, res } = createMocks({

        "method": 'GET' as RequestMethod
        query: {;} // No productId
      })

        method: 'GET' as RequestMethod,
        query: {}, // No productId
      });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


=======
    })
    it('should fail if productId is missing (400)', async () => {'
      }
        "method": 'GET' as RequestMethod'
        }
        "query": {} // No productId
     
})
>>>>>>> origin/cursor/delete-old-data-records-6bba
      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({

        "error": 'productId is required in the URL path and must be a string.'
      })
    })
  })
})
<<<<<<< HEAD
        "error"import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (401)',async () => { const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (404)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (401)',async () => { const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (404)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (401)',async () => { const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (404)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })
=======
        "error"
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (401)',async () => { const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (404)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })

<<<<<<< HEAD
        "error"

import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (401)',async () => { const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (404)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (401)',async () => { const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (404)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })
ursor/add-new-services-and-deploy-updates-0462
ursor/integrate-build-improve-and-re-verify-8f7d
        "error"


        "error"


  describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) });

=======

        "error"

import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() });


import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from '@/pages/api/reviews';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('@prisma/client');
jest.mock('@/integrations/supabase/client');

describe('/api/reviews API Endpoint', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('GET /api/reviews', () => {
    it('should return reviews with pagination', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET' as RequestMethod,
        query: { page: '1', limit: '10' }
      });

      await reviewsHandler(req, res);

      expect(res._getStatusCode()).toBe(200);
    });
  });

  describe('POST /api/reviews', () => {
    it('should create a new review', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          productId: '1',
          rating: 5,
          comment: 'Great product!'
        }
      });




jest.mock('@prisma/client''
          this.name = 'PrismaClientKnownRequestError''
jest.mock('@/integrations/supabase/client''

describe('/api/reviews API Endpoint''
  describe('POST /api/reviews''
    it('should successfully create a review (201)''
        "email""
        "name""
        "passwordHash""
        "role""
        "userType""
        "productId""
        "comment""
        "user": { "id": 'supaUserId', "email""
        "access_token""
        "refresh_token""
        "token_type""
        "method""
        "body": { "productId": 'prod1', "rating": 5, "comment""
          "comment""
        }
        "user": { "id": 'supaUserId', "email""
        "access_token""
        "refresh_token""
        "token_type""
        "email""
            "target""
        "method""
          "comment""
        "error""
        "method""
        "body": { "productId": 'prod1', "rating": 6, "comment""
        "error""
        "method""
        "error""
        "method""
        "error""
        "access_token""
        "refresh_token""
        "token_type""
        "method""
        "error""
        "access_token""
        "refresh_token""
        "token_type""
        "method""
        "error""
          "id""
        "method""
          "where""
        "method""
        "method""



  }



import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId]






  PrismaClient,
  ProductReview,
  User as PrismaUser,
  Prisma
} from '@prisma/client'; // Import Prisma types'
  User as SupabaseUser,
  Session,
  AuthError
} from '@supabase/supabase-js'; // Supabase types'
// Mock Prisma Client,
jest.mock('@prisma/client', () => {'
  }
  const mockPrismaClient = {
    "productReview": {"
      }
      "create": jest.fn(),
      "findMany": jest.fn()"
    },
    "user": {"
      }
      "findUnique": jest.fn()
   
},
    $"disconnect": jest.fn()"
  };
  return {
    "PrismaClient": jest.fn(() => mockPrismaClient),"
    // Mock Prisma known request error for testing specific error codes
    "Prisma": {"
      }
      "PrismaClientKnownRequestError": class PrismaClientKnownRequestError extends Error {
        }
        "code": string;
        meta?: Record<string, unknown>;
        constructor("message": string,"code": string,"clientVersion": string,meta?: Record<string, unknown>;"
        ) {super(message)this.code = code;
          }
          this.meta = meta;
          this.name = 'PrismaClientKnownRequestError'}'
      }
    }
  }})this.name = 'PrismaClientKnownRequestError';'
        }
      }
  }})
// Mock Supabase Client,
jest.mock('@/integrations/supabase/client', () => ({'
  "supabase": {"
    }
    "auth": {
      }
      "getSession": jest.fn()
    }
  
})// Mock Supabase Client;
jest.mock('@/integrations/supabase/client', () => ({"supabase": {"auth": {"getSession": jest.fn()}"
  }
}))"getSession": jest.fn()}
  }
}))// Define expected response types;

interface ErrorResponse  {"error": string;"
  }
  details?: string;
}
// For POST /api/reviews, success is the created ProductReview;
type PostReviewSuccessResponse = ProductReview;
// For GET /api/reviews/[productId], success is ProductReview[];
type GetReviewsSuccessResponse = ProductReview[];
describe('/api/reviews API Endpoint', () => {let "prismaMock": PrismaClient; // Use PrismaClient type for the mock;"
  }
  beforeEach(() => {prismaMock = new PrismaClient()(prismaMock.productReview.create as jest.Mock).mockReset()(prismaMock.productReview.findMany as jest.Mock).mockReset()(prismaMock.user.findUnique as jest.Mock).mockReset()(prismaMock.$disconnect as jest.Mock).mockReset()// This is not typically called in handlers;
    (supabase.auth.getSession as jest.Mock).mockReset()})describe('POST /api/reviews', () => {it('should successfully create a review (201)', async () => {const "mockPrismaUser": PrismaUser = {"id": 1,"email": 'test@example.com',"name": 'Test User',"passwordHash": 'hashedpassword',"createdAt": new Date(),"updatedAt": new Date(),"avatarUrl": null,"bio": null,"companyId": null,"headline": null,"lastLoginAt": null,"notifications": {}"
        "profileComplete": false,"resetToken": null,"resetTokenExpiry": null,"role": 'USER',"softDeleted": false,"userType": 'individual';'
        "email": 'test@example.com',"name": 'Test User',"passwordHash": 'hashedpassword',"createdAt": new Date(),"updatedAt": new Date(),"avatarUrl": null,"bio": null,"companyId": null,"headline": null,"lastLoginAt": null,"notifications":  ,'
},"profileComplete": false,"resetToken": null,"resetTokenExpiry": null,"role": 'USER',"softDeleted": false,"userType": 'individual,'
}

const "mockReviewResponse": ProductReview = {"id": 'review1',"productId": 'prod1',"userId": 1,"rating": 5,"comment": 'Great!',"createdAt": new Date(),"updatedAt": new Date()}"
;
  const "mockSupabaseSession": Session = {"user": { "id": 'supaUserId', "email": 'test@example.com' } as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;"
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSession,"
},"error": null;"
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser)(prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse)const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": { "productId": 'prod1', "rating": 5, "comment": 'Great!' }'
      })"productId": 'prod1',"userId": 1,"rating": 5,"comment": 'Great!',"createdAt": new Date(),"updatedAt": new Date(,'
}

const "mockSupabaseSession": Session = {"user": { "id": 'supaUserId', "email": 'test@example.com',;'
} as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;'
      }(supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSession
},"error": null;
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser;
      )(prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse;
      )const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": { "productId": 'prod1', "rating": 5, "comment": 'Great!' }'
     
})await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(201)expect(res._getJSONData()).toEqual(mockReviewResponse)// Assuming ProductReview is directly returned;
      expect(prismaMock.productReview.create).toHaveBeenCalledWith({"data": {"productId": 'prod1',"rating": 5,"comment": 'Great!',"userId": mockPrismaUser.id;"
}))
// Define expected response types,
interface ErrorResponse {
  "error": string"
  }
  details?: string
}
// For POST /api/reviews, success is the created ProductReview,
type PostReviewSuccessResponse = ProductReview
// For GET /api/reviews/[productId], success is ProductReview[]
type GetReviewsSuccessResponse = ProductReview[]
describe('/api/reviews API Endpoint', () => {'
  }
  let "prismaMock": PrismaClient; // Use PrismaClient type for the mock"
  beforeEach(() => {
    }
    prismaMock = new PrismaClient()
    (prismaMock.productReview.create as jest.Mock).mockReset()
    (prismaMock.productReview.findMany as jest.Mock).mockReset()
    (prismaMock.user.findUnique as jest.Mock).mockReset()
    (prismaMock.$disconnect as jest.Mock).mockReset(); // This is not typically called in handlers
    (supabase.auth.getSession as jest.Mock).mockReset()
  })
  describe('POST /api/reviews', () => {'
    }
    it('should successfully create a review (201)', async () => {'
      }
      const "mockPrismaUser": PrismaUser = {"
        }
        "id": 1,
        "email": 'test@example.com','
        "name": 'Test User','
        "passwordHash": 'hashedpassword','
        "createdAt": new Date(),"
        "updatedAt": new Date(),"
        "avatarUrl": null,"
        "bio": null,"
        "companyId": null,"
        "headline": null,"
        "lastLoginAt": null,"
        "notifications": {}"
        "profileComplete": false,"
        "resetToken": null,"
        "resetTokenExpiry": null,"
        "role": 'USER','
        "softDeleted": false,"
        "userType": 'individual''
      };

const "mockReviewResponse": ProductReview = {"
        }
        "id": 'review1','
        "productId": 'prod1','
        "userId": 1,"
        "rating": 5,"
        "comment": 'Great!','
        "createdAt": new Date(),"
        "updatedAt": new Date()"
      };

const "mockSupabaseSession": Session = {"
        }
        "user": { "id": 'supaUserId', "email": 'test@example.com' } as SupabaseUser,'
        "access_token": 'token','
        "refresh_token": 'ref','
        "expires_in": 3600,"
        "token_type": 'bearer','
        "expires_at": Date.now() + 3600000"
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { "session": mockSupabaseSession,"
},
        "error": null"
      })
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser)
      (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse)
     ;
  const { req, res } = createMocks({
        "method": 'POST' as RequestMethod,'
        "body": { "productId": 'prod1', "rating": 5, "comment": 'Great!' }'
      })
      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(201)
      expect(res._getJSONData()).toEqual(mockReviewResponse); // Assuming ProductReview is directly returned,
expect(prismaMock.productReview.create).toHaveBeenCalledWith({
        "data": {"
          }
          "productId": 'prod1','
          "rating": 5,"
          "comment": 'Great!','
          "userId": mockPrismaUser.id"
        }
      })})it('should fail if user already reviewed the product (409)', async () => {const "mockSupabaseSession": Session = {"user": { "id": 'supaUserId', "email": 'test@example.com' } as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;"
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSession,"
},"error": null;"
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue({"id": 1,"email": 'test@example.com';'
      })"rating": 5,"comment": 'Great!',"userId": mockPrismaUser.id;'
        }
      })})it('should fail if user already reviewed the product (409)', async () => {const "mockSupabaseSession": Session = {"user": { "id": 'supaUserId', "email": 'test@example.com','
} as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;'
      }(supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSession
},"error": null;
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue({"id": 1,"email": 'test@example.com';'
      })(prismaMock.productReview.create as jest.Mock).mockRejectedValue(new Prisma.PrismaClientKnownRequestError('Unique constraint failed','P2002','client-version',{"target": ['productId,userId'];'
            }
            "target": ['productId', 'userId']}'
        ))const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1',"rating": 5,"comment": 'Another great review!';'
        }
      })"rating": 5,"comment": 'Another great review!';'
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(409)expect(res._getJSONData()).toEqual({"error": 'You have already reviewed this product.';'
      })})it('should fail with invalid rating (400) - too high', async () => {const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": { "productId": 'prod1', "rating": 6, "comment": 'Too good!' }'
      })"error": 'You have already reviewed this product.';'
      })})it('should fail with invalid rating (400) - too high', async () => {const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": { "productId": 'prod1', "rating": 6, "comment": 'Too good!' }'
     
})await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(400)expect(res._getJSONData()).toEqual({"error": 'Rating is required and must be a number between 1 and 5.';'
      })})it('should fail with invalid rating (400) - not a number', async () => {const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1';'
          }
          "rating": 'five-stars';'
          "comment": 'Text rating!';'
        }
      })"error": 'Rating is required and must be a number between 1 and 5.';'
      })})it('should fail with invalid rating (400) - not a number', async () => {const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1',"rating": 'five-stars',"comment": 'Text rating!';'
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(400)expect(res._getJSONData()).toEqual({"error": 'Rating is required and must be a number between 1 and 5.';'
      })})it('should fail if not authenticated (401)', async () => {(supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": null,"
}
        "error": null;"
      })const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1';'
          }
          "rating": 5;
          "comment": 'Trying to review without login';'
        }
      })"error": 'Rating is required and must be a number between 1 and 5.';'
      })})it('should fail if not authenticated (401)', async () => {(supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": null,'
},"error": null;
      })const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1',"rating": 5,"comment": 'Trying to review without login';'
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(401)expect(res._getJSONData()).toEqual({"error": 'Not authenticated or session error.';'
      })})it('should fail if Supabase user email is missing (401)', async () => {const "mockSupabaseSessionNoEmail": Session = {"user": { "id": 'supaUserId', "email": undefined } as SupabaseUser;"
        "access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;"
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { "session": mockSupabaseSession,"
},
        "error": null"
      })
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({
        "id": 1,"
        "email": 'test@example.com''
      })
      (prismaMock.productReview.create as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError(
          'Unique constraint failed','
          'P2002','
          'client-version','
          {
            "target": ['productId,userId']'
          }
        )
      )
        "method": 'POST' as RequestMethod,'
        "body": {"
          }
          "productId": 'prod1','
          "rating": 5,"
          "comment": 'Another great review!''
        }
      })
      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(409)
      expect(res._getJSONData()).toEqual({
        "error": 'You have already reviewed this product.''
      })
    })
    it('should fail with invalid rating (400) - too high', async () => {'
      }
        "method": 'POST' as RequestMethod,'
        "body": { "productId": 'prod1', "rating": 6, "comment": 'Too good!' }'
      })
      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({
        "error": 'Rating is required and must be a number between 1 and 5.''
      })
    })
    it('should fail with invalid rating (400) - not a number', async () => {'
      }
        "method": 'POST' as RequestMethod,'
        "body": {"
          }
          "productId": 'prod1''
          "rating": 'five-stars''
          "comment": 'Text rating!''
        }
     
})
      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({
        "error": 'Rating is required and must be a number between 1 and 5.''
      })
    })
    it('should fail if not authenticated (401)', async () => {'
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { "session": null }"
        "error": null"
     
})
        "method": 'POST' as RequestMethod,'
        "body": {"
          }
          "productId": 'prod1''
          "rating": 5,
"comment": 'Trying to review without login''
        }
     
})
      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(401)
      expect(res._getJSONData()).toEqual({
        "error": 'Not authenticated or session error.''
      })
    })
    it('should fail if Supabase user email is missing (401)', async () => {'
      }
      const "mockSupabaseSessionNoEmail": Session = {"
        }
        "user": { "id": 'supaUserId', "email": undefined } as SupabaseUser"
        "access_token": 'token','
        "refresh_token": 'ref','
        "expires_in": 3600,"
        "token_type": 'bearer','
        "expires_at": Date.now() + 3600000"
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSessionNoEmail,"
}
        "error": null;"
      })const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1';'
          }
          "rating": 5;
          "comment": 'Review with no email in session';'
        }
      })"error": 'Not authenticated or session error.';'
      })})it('should fail if Supabase user email is missing (401)', async () => {const "mockSupabaseSessionNoEmail": Session = {"user": { "id": 'supaUserId', "email": undefined,'
} as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;'
      }(supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSessionNoEmail
},"error": null;
      })const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1',"rating": 5,"comment": 'Review with no email in session';'
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(401)expect(res._getJSONData()).toEqual({"error": 'User email not found in session.';'
      })})"error": 'User email not found in session.';'
      })})it('should fail if user not found in Prisma database (404)', async () => {const "mockSupabaseSession": Session = {"user": {"id": 'supaUserId';'
          }
          "email": 'unknown@example.com';'
        } as SupabaseUser;
        "access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;"
      })
      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(401)
      expect(res._getJSONData()).toEqual({
        "error": 'User email not found in session.''
      })
    })
    it('should fail if user not found in Prisma database (404)', async () => {'
      }
        }
        "user": {
          }
          "id": 'supaUserId''
          "email": 'unknown@example.com''
       
} as SupabaseUser
        "access_token": 'token','
        "refresh_token": 'ref','
        "expires_in": 3600,"
        "token_type": 'bearer','
        "expires_at": Date.now() + 3600000"
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSession,"
},"error": null;"
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null)const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1';'
          }
          "rating": 5;
          "comment": 'User exists in Supa, not Prisma';'
        }
      })"id": 'supaUserId',"email": 'unknown@example.com';'
        } as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000;'
      }(supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { "session": mockSupabaseSession
},"error": null;
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null)const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {"productId": 'prod1',"rating": 5,"comment": 'User exists in Supa, not Prisma';'
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(404)expect(res._getJSONData()).toEqual({"error": 'User not found in our database.';'
      })})})describe('GET /api/reviews/[productId]', () => {it('should successfully fetch reviews for a product (200)', async () => {const "mockReviewsList": ProductReview[] = [{"id": 'rev1';'
          }
          "productId": 'prod123';'
          "userId": 1;
          "rating": 5;
          "comment": 'Excellent!';'
          "createdAt": new Date()"updatedAt": new Date(
}
        {"id": 'rev2';'
          }
          "productId": 'prod123';'
          "userId": 2;
          "rating": 4;
          "comment": 'Very good.';'
          "createdAt": new Date()"updatedAt": new Date(
}
      ];
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList)const { req, res } = createMocks({"method": 'GET' as RequestMethod;'
        }
        "query": { "productId": 'prod123' }'
     
})"error": 'User not found in our database.';'
      })})})describe('GET /api/reviews/[productId]', () => {it('should successfully fetch reviews for a product (200)', async () => {const "mockReviewsList": ProductReview[] = [;'
        {"id": 'rev1',"productId": 'prod123',"userId": 1,"rating": 5,"comment": 'Excellent!',"createdAt": new Date(),"updatedAt": new Date(,'
},{"id": 'rev2',"productId": 'prod123',"userId": 2,"rating": 4,"comment": 'Very good.',"createdAt": new Date(),"updatedAt": new Date(,'
}
      ];(prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList;
      )const { req, res } = createMocks({"method": 'GET' as RequestMethod,"query": { "productId": 'prod123' }'
     
})await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(200)expect(res._getJSONData()).toEqual(mockReviewsList)expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(expect.objectContaining({"where": { "productId": 'prod123' }'
          "where": { "productId": 'prod123' }}),'
})it('should return an empty array if no reviews found (200)', async () => {(prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([])const { req, res } = createMocks({"method": 'GET' as RequestMethod;'
        }
        "query": { "productId": 'prodNonExistent' }'
     
})"method": 'GET' as RequestMethod,"query": { "productId": 'prodNonExistent' }'
     
})await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(200)expect(res._getJSONData()).toEqual([])})it('should fail if productId is missing (400)', async () => {const { req, res } = createMocks({"method": 'GET' as RequestMethod;'
        }
        "query":  
} // No productId;
      })"method": 'GET' as RequestMethod,"query":  ,'
}, // No productId;
      })await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>;
      )expect(res._getStatusCode()).toBe(400)expect(res._getJSONData()).toEqual({"error": 'productId is required in the URL path and must be a string.';'
      })})})})"error";"
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { "productReview": { "create": jest.fn(),"findMany": jest.fn(),'
},"user": { "findUnique": jest.fn()
},$"disconnect": jest.fn() ;
  return { "PrismaClient": jest.fn(() => mockPrismaClient),"Prisma": { "PrismaClientKnownRequestError": class PrismaClientKnownRequestError extends Error { "code": string; meta?: Record<string,unknown>; constructor( "message": string,"code": string,"clientVersion": string,meta?: Record<string,unknown> ) { super(message)this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ "supabase": { "auth": { "getSession": jest.fn() } },'
})) interface ErrorResponse { "error": string details?: string;
}

type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let "prismaMock": PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset()(supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const "mockPrismaUser": PrismaUser = { "id": 1,"email": 'test@example.com',"name": 'Test User',"passwordHash": 'hashedpassword',"createdAt": new Date(),"updatedAt": new Date(),"avatarUrl": null,"bio": null,"companyId": null,"headline": null,"lastLoginAt": null,"notifications":  ,'
} "profileComplete": false,"resetToken": null,"resetTokenExpiry": null,"role": 'USER',"softDeleted": false,"userType": 'individual','
}

const "mockReviewResponse": ProductReview = { "id": 'review1',"productId": 'prod1',"userId": 1,"rating": 5,"comment": 'Great!',"createdAt": new Date(),"updatedAt": new Date();'
}

const "mockSupabaseSession": Session = { "user": { "id": 'supaUserId',"email": 'test@example.com',;'
} as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": mockSupabaseSession,'
},"error": null
}) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1',"rating": 5,"comment": 'Great!' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse)expect(prismaMock.productReview.create).toHaveBeenCalledWith({ "data": { "productId": 'prod1',"rating": 5,"comment": 'Great!',"userId": mockPrismaUser.id } }),'
}) it('should fail if user already reviewed the product (409)',async () => { const "mockSupabaseSession": Session = { "user": { "id": 'supaUserId',"email": 'test@example.com','
} as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": mockSupabaseSession,'
},"error": null
}) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ "id": 1,"email": 'test@example.com','
}) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ "target": ['productId,userId'] } ) ) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1',"rating": 5,"comment": 'Another great review!' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ "error": 'You have already reviewed this product.' }),'
}) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1',"rating": 6,"comment": 'Too good!' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ "error": 'Rating is required and must be a number between 1 and 5.' }),'
}) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1' "rating": 'five-stars' "comment": 'Text rating!' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ "error": 'Rating is required and must be a number between 1 and 5.' }),'
}) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": null } "error": null,'
}) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1' "rating": 5 "comment": 'Trying to review without login' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ "error": 'Not authenticated or session error.' }),'
}) it('should fail if Supabase user email is missing (401)',async () => { const "mockSupabaseSessionNoEmail": Session = { "user": { "id": 'supaUserId',"email": undefined,'
} as SupabaseUser "access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": mockSupabaseSessionNoEmail } "error": null,'
}) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1' "rating": 5 "comment": 'Review with no email in session' },'
}) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ "error": 'User email not found in session.' }),'
}) it('should fail if user not found in Prisma database (404)',async () => { const "mockSupabaseSession": Session = { "user": { "id": 'supaUserId' "email": 'unknown@example.com','
} as SupabaseUser "access_token": 'token',"refresh_token": 'ref',"expires_in": 3600,"token_type": 'bearer',"expires_at": Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ "data": { "session": mockSupabaseSession,'
},"error": null
}) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ "method": 'POST' as RequestMethod,"body": { "productId": 'prod1' "rating": 5 "comment": 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ "error": 'User not found in our database.' }) }),'
}) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const "mockReviewsList": ProductReview[] = [ { "id": 'rev1' "productId": 'prod123' "userId": 1 "rating": 5 "comment": 'Excellent!' "createdAt": new Date() "updatedAt": new Date() } { "id": 'rev2' "productId": 'prod123' "userId": 2 "rating": 4 "comment": 'Very good.' "createdAt": new Date() "updatedAt": new Date(),'
} ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ "method": 'GET' as RequestMethod "query": { "productId": 'prod123' },'
}) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ "where": { "productId": 'prod123' } }) ),'
}) it('should;'
  return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ "method": 'GET' as RequestMethod "query": { "productId": 'prodNonExistent' },'
}) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => {;'
}
const { req,res } = createMocks({ "method": 'GET' as RequestMethod "query": {},;'
}) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ "error": 'productId is required in the URL path and must be a string.' }) }) }),'
})"error";"
        "error";"
ursor/fix-website-loading-errors-and-merge-6662;
        "error";"
        "error";"
ursor/add-new-services-and-deploy-updates-0462;
ursor/integrate-build-improve-and-re-verify-8f7d;
        "error";"
        "error";"
        "error";"
ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;
        "error";"
        "error": 'productId is required in the URL path and must be a string.';'
      })})})})
      })
      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(404)
      expect(res._getJSONData()).toEqual({
        "error": 'User not found in our database.''
      })
    })
  })
  describe('GET /api/reviews/[productId]', () => {'
    }
    it('should successfully fetch reviews for a product (200)', async () => {'
      }
      const "mockReviewsList": ProductReview[] = [{"
          }
          "id": 'rev1''
          "productId": 'prod123''
          "userId": 1,
"rating": 5,
"comment": 'Excellent!''
          "createdAt": new Date()
          "updatedAt": new Date()
        }
        {
          "id": 'rev2''
          }
          "productId": 'prod123''
          "userId": 2,
"rating": 4,
"comment": 'Very good.''
          "createdAt": new Date()
          "updatedAt": new Date()
       
}
      ]
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList)
        "method": 'GET' as RequestMethod'
        }
        "query": { "productId": 'prod123' }'
     
})
      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(mockReviewsList)
      expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          "where": { "productId": 'prod123' }'
        })
      )
   
})
    it('should return an empty array if no reviews found (200)', async () => {'
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([])
      }
        "method": 'GET' as RequestMethod'
        }
        "query": { "productId": 'prodNonExistent' }'
     
})
      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual([])
    })
    it('should fail if productId is missing (400)', async () => {'
      }
        "method": 'GET' as RequestMethod'
        }
        "query": {} // No productId
     
})
      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({
        "error": 'productId is required in the URL path and must be a string.''
      })
    })
  })
})
<<<<<<< HEAD
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (401)',async () => { const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (404)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews'; import productReviewsHandler from '@/pages/api/reviews/[productId]'; import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client'; import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js'; import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient = { productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string; meta?: Record<string,unknown>; constructor( message: string,code: string,clientVersion: string,meta?: Record<string,unknown> ) { super(message); this.code = code; this.meta = meta; this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient; beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(); (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (201)',async () => { const mockPrismaUser: PrismaUser = { id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview = { id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(201) expect(res._getJSONData()).toEqual(mockReviewResponse); expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P2002','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (400) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (400) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (401)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (401)',async () => { const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(401) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (404)',async () => { const mockSupabaseSession: Session = { user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 3600,token_type: 'bearer',expires_at: Date.now() + 3600000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(404) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (200)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (200)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(200) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (400)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(400) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })
>>>>>>> origin/main
