import import React { useState useEffect } from 'react';
import import { useForm,,, ,,  } from 'react-hook-form';
import import { zodResolver,,, ,,  } from '@hookform/resolvers/zod';
import import { z,,, ,,  } from 'zod';
import import { Button,,, ,,  } from '@/components/ui/button';
import import { Input,,, ,,  } from '@/components/ui/input';
import import { Label,,, ,,  } from '@/components/ui/label';
import import { useAuth,,, ,,  } from '@/hooks/useAuth';
import import { toast,,, ,,  } from '@/hooks/use-toast';
import { CheckCircle,,, AlertCircle,,, Eye,,, EyeOff,,, Loader2,,  } from 'lucide-react'
import import { cn,,, ,,  } from '@/lib/utils';
import import { fireEvent,,, ,,  } from '@/lib/analytics';
import import { logErrorToProduction } from '@/utils/productionLogger';
const signupSchema = null;
                passwordStrength.strength >= 4 ? 'text-green-600' :
                passwordStrength.strength >= 3 ? 'text-blue-600' :
                passwordStrength.strength >= 2 ? 'text-yellow-600' : 'text-red-600'
              )}>
                {passwordStrength.label}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
className={cn('h-2 rounded-full transition-all duration-300', passwordStrength.color)}
                style={{ width: `${passwordStrength.percentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="grid grid-cols-2 gap-1">
                <span className={watchedFields.password?.length >= 8 ? 'text-green-600' : 'text-gray-400'}>
                  ✓ 8+ characters
                </span>
                <span className={/[A-Z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Uppercase letter
                </span>
                <span className={/[a-z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Lowercase letter
                </span>
                <span className={/[0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Number
                </span>
                <span className={/[^A-Za-z0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Special character
                </span>
              </div>
            </div>
          </div>
        )}
        
        {errors.password && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.password.message}
          </p>
        )}
      </div>

