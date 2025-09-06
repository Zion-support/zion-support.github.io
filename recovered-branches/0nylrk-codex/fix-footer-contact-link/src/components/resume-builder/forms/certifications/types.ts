
<<<<<<< HEAD

import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { z } from 'zod';
// Define schema for form validation;
export const certificationSchema = z.object({';
import {z} from 'zod';
<<<<<<< HEAD
// Define schema for form validation
<<<<<<< HEAD
<<<<<<< HEAD
export const certificationSchema = z.object({;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

import { z } from 'zod';
// Define schema for form validation
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;

<<<<<<< HEAD

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  name: z.string().min(1, 'Certification name is required');
=======
=======
import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;


  name: z.string().min(1, 'Certification name is required');
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional()
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;


import { z } from 'zod',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Define schema for form validation;
export const certificationSchema = z.object({;
'
  name: z.string().min(1, 'Certification name is required');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional()
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type CertificationFormValues = z.infer<typeof certificationSchema>;
export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


'
import { z } from 'zod',;
=======
export const certificationSchema = z.object({;import { z } from 'zod',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export const certificationSchema = z.object({;import { z } from 'zod',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// Define schema for form validation;
export const certificationSchema = z.object({;'
  name: z.string().min(1, 'Certification name is required'),;'
  issuing_organization: z.string().min(1, 'Issuing organization is required'),;
  issue_date: z.string().optional(),;
  expiration_date: z.string().optional(),;
  credential_id: z.string().optional(),;
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;
<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {z} from 'zod';
// Define schema for form validation;
export const certification_schema = z.object ({';
  name: z.string ().min (1, 'Certification name is required');'
  issuing_organization: z.string ().min (1, 'Issuing organization is required');
  issue_date: z.string ().optional ();
  expiration_date: z.string ().optional ();
  credential_id: z.string ().optional (),
  credential_url: z.string ().optional ()});
;
export type CertificationFormValues = z.infer < typeof certification_schema>;
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
'
import { z } from 'zod',;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import { z } from 'zod',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Define schema for form validation;
export const certificationSchema = z.object({;'
  name: z.string().min(1, 'Certification name is required'),;'
  issuing_organization: z.string().min(1, 'Issuing organization is required'),;
  issue_date: z.string().optional(),;
  expiration_date: z.string().optional(),;
  credential_id: z.string().optional(),;
  credential_url: z.string().optional()});

<<<<<<< HEAD
<<<<<<< HEAD
=======

export type CertificationFormValues = z.infer<typeof certificationSchema>;
export type CertificationFormValues = z.infer<typeof certificationSchema>;
export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type CertificationFormValues = z.infer<typeof certificationSchema>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export type CertificationFormValues = z.infer<typeof certificationSchema>;
export type CertificationFormValues = z.infer<typeof certificationSchema>;
export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
