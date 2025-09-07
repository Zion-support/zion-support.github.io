
import { useState  } from 'react';
import { TALENT_PROFILES  } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
export function useTalentData() {


import {useState} from 'react';
import {TALENT_PROFILES} from '@/data/talentData';
import {TalentProfile} from '@/types/talent';
export function useTalentData() {;

  const [isLoading, setIsLoading] = useState(false);

import {useState} from 'react';
import {TALENT_PROFILES} from '@/data/talentData';
import {TalentProfile} from '@/types/talent';
export function useTalentData() {;

  const [isLoading, setIsLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);


  }
