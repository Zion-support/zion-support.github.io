

import { Button } from "@/components/ui/button",

import React from './react';
import { ResumeSelector, ResumeOption  } from '../resume - selector';
import { Button  } from '@/components / ui / button';







          






            disabled={!selectedResumeId || isSubmitting}
            className="w-full">;
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>;
          {!selectedResumeId && (;
            <p className="text-sm text-muted-foreground mt-2">;
              Please select a resume to continue;
            </p>;
          )}
        </div>;
      )}


    </div>;


  );






