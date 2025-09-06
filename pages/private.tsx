import { GetServerSideProps, GetServerSidePropsContext } from 'next / types';
import { createServerSideClient } from '../src / utils / supabase / server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { User, Mail, Calendar, Shield } from 'lucide-react';
}
export default /**
 * PrivatePage - Function description
 */
function PrivatePage() {
  return (
      user: data.user}}
}