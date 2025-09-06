import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react', // X is imported but not used, consider removing if not needed.
import { Button  } from '@/components/ui/button';
import { safeSessionStorage } from '@/utils/safeStorage';
const SHOWN_KEY = null;
