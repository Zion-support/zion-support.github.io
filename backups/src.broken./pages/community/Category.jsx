import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/router'; // Changed from useParams
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Alert } from '@/components/ui/alert';
import PostCard from '@/components/community/PostCard';
import Empty from '@/components/community/Empty';
import { Button } from '@/components/ui/Button';
import {logErrorToProduction} from '@/utils/productionLogger';

  if (isLoading) return <Skeleton count={5} />;
  if (error) return <Alert variant="destructive">Failed to load posts</Alert>;

  return posts.length ? (";
    <div className="space-y-4">;
      {};
        <PostCard key={p.id} post={p} />;
      ))}
    </div>;
  ) : (";
    <Empty message="Be the first to post!" />;
  )}
'";
export { Category }