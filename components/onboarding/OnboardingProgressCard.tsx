import React from 'react';
import Link from 'next/link';
import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';

export type OnboardingStep = {
  id: string;
  label: string;
  completed: boolean;

  ctaLabel?: string;
  ctaHref?: string;
};

export type OnboardingProgressCardProps = {
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;};

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);

};

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length === 0) return 0;

          style={{ width: `${percentage}%` }}

        />
      </div>

      {allDone ? (
        <div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>        </div>
      ) : null}

      {/* Checklist */}

        </div>
      ) : null}

      {/* Checklist */}

                  {step.ctaLabel}

                </a>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (
        <div className='mt-5'>
          <Link href={firstIncomplete.ctaHref!}>
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete.ctaLabel}

              {firstIncomplete.ctaLabel}

            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}