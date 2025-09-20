import { useState } from 'react';
import { useLocalStorage } from '@/hooks';
import Header from '@/components/Header';
import { SEO } from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Wallet, Database, Save } from 'lucide-react';

import React, { useState } from 'react';
import { useLocalStorage } from '@/hooks';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Wallet, Database, Save } from 'lucide-react';

export default function AccountSettings() {
id='displayWeb3'
id='backup'
onClick={handleSave}
xmlns='http://www.w3.org/2000/svg'
xmlns='http://www.w3.org/2000/svg'
variant='outline'
</>
  );
};