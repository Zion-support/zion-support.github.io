import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import {
import React, { useState } from 'react';

import {
  Gift
  Star
  Users
  ShoppingBag
  MessageSquare
  TrendingUp
  History
  Gift,
  Star,
  Users,
  ShoppingBag,
  MessageSquare,
  TrendingUp,;
  History;


  Card,
  CardContent,
  CardDescription,;
  CardHeader;
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';



  async function handleRedeem(reward: {
    id: string;
    cost: number;
    title: string;







ursor/fix-website-loading-errors-and-merge-6662

      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
    },
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',












































                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>

                      disabled={redeeming}

                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>




                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>



                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>


      <Card className='text-center'>
        <CardContent className='pt-6'>
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />
          <h3 className='text-2xl font-bold mb-2'>
            Full Rewards System Coming Soon
          </h3>
          <p className='text-muted-foreground mb-4'>
            We're finalizing the redemption system. Keep earning points -
            they'll be ready to spend soon!








