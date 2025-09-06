import React, { useEffect } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import SignupForm from '@/components/auth/SignupForm';
import { AuthButtons  } from '@/components/AuthButtons';
import { fireEvent  } from '@/lib/analytics';
import { logInfo  } from '@/utils/productionLogger';
import { useRouter } from 'next/router';
const RegisterPage = null;