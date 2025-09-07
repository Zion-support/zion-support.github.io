
        import { z } from 'zod';
        
        // Common validation schemas
        export const emailSchema = z.string().email('Invalid email address');
        export const passwordSchema = z.string().min(8, 'Password must be at least 8 characters');
        export const nameSchema = z.string().min(2, 'Name must be at least 2 characters');
        
        // API validation middleware
        export function validateRequest(schema) {
          return (req, res, next) => {
            try {
              const validatedData = schema.parse(req.body);
              req.body = validatedData;
              next();
            } catch (error) {
              return res.status(400).json({
                error: 'Validation failed',
                details: error.errors
              });
            }
          };
        }
      