
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
const steps = ["Account", "Profile", "Preferences", "Preview"];

import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
const steps = ['AccountProfilePreferencesPreview'],
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
