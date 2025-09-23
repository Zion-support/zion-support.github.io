
import { useState } from 'react';
import { useMessaging } from '@/context/MessagingContext';
import { MainNavigation } from './MainNavigation';
import { Logo } from '@/components/header/Logo';
import { LanguageSelector } from '@/components/header/LanguageSelector';
import { CurrencySelector } from '@/components/header/CurrencySelector';
import { useTranslation } from 'react-i18next';
