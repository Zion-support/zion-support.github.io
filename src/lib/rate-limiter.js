
        import { NextResponse } from 'next/server';
        
        const rateLimitMap = new Map();
        
        export function rateLimit(limit = 10, windowMs = 60000) {
          return (req) => {
            const ip = req.ip || req.connection.remoteAddress;
            const now = Date.now();
            const windowStart = now - windowMs;
            
            if (!rateLimitMap.has(ip)) {
              rateLimitMap.set(ip, []);
            }
            
            const requests = rateLimitMap.get(ip);
            const validRequests = requests.filter(time => time > windowStart);
            
            if (validRequests.length >= limit) {
              return NextResponse.json(
                { error: 'Too many requests' },
                { status: 429 }
              );
            }
            
            validRequests.push(now);
            rateLimitMap.set(ip, validRequests);
            
            return null;
          };
        }
      