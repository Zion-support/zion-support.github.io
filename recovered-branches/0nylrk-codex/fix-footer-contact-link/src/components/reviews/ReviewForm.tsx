<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

<<<<<<< HEAD

import { useState } from "react",
import { Star } from "lucide-react",
import { useForm } from "react-hook-form",

  FormMessage} from "@/components/ui/form",
import {
  RadioGroup;
  RadioGroupItem} from "@/components/ui/radio-group",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from "react";
import {Star} from "lucide-react";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Switch} from "@/components/ui/switch";
import {Review} from "@/types/reviews";
<<<<<<< HEAD
interface ReviewFormValues {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
import { useState } from './react';
import { Star } from './lucide-react';
import { use_form } from './react - hook - form';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { RadioGroup, RadioGroupItem } from '@/components / ui / radio - group';
import { Switch } from '@/components / ui / switch';
import { Review } from '@/types / reviews';
interface ReviewFormValues {
  rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
  is_anonymous?: boolean;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { Star } from "lucide-react",
import { useForm } from "react-hook-form",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
=======
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  FormMessage} from "@/components/ui/form",
import {
  RadioGroup;
  RadioGroupItem} from "@/components/ui/radio-group",
<<<<<<< HEAD
import { Switch } from "@/components/ui/switch";
import { Review } from "@/types/reviews";
=======
import { Switch } from "@/components/ui/switch",
import { Review } from "@/types/reviews",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ReviewFormValues {
  rating?: number,
  review_text?: string,
  communication_rating?: number,
  quality_rating?: number,
  timeliness_rating?: number,
  would_work_again?: boolean,
  is_anonymous?: boolean
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
interface ReviewFormProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  onSubmit: (data: any) => Promise<boolean>, ;
  defaultValues?: Review;
  isSubmitting: boolean;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx


export function ReviewForm(): any ({;

========
export function ReviewForm(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
=======
<<<<<<< HEAD
}
interface ReviewFormProps {

  projectId: string
  revieweeId: string
  revieweeName: string
  onSubmit: (data: any) => Promise<boolean>

  defaultValues?: Review;
  isSubmitting: boolean
}
<<<<<<< HEAD
=======

export function ReviewForm({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  projectId;
  revieweeId;
  revieweeName;
  onSubmit;
  defaultValues;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { Star } from "lucide-react",;
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import {;
  RadioGroup,;
  RadioGroupItem} from "@/components/ui/radio-group",;
import { Switch } from "@/components/ui/switch",;
import { Review } from "@/types/reviews",;
interface ReviewFormValues {;
  rating?: number,;
  review_text?: string,;
  communication_rating?: number,;
  quality_rating?: number,;
  timeliness_rating?: number,;
  would_work_again?: boolean,;
  is_anonymous?: boolean;
}
;
interface ReviewFormProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  onSubmit: (data: any) => Promise<boolean>,;
  defaultValues?: Review,;
  isSubmitting: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ReviewForm({
  projectId,
  revieweeId,
  revieweeName,
  onSubmit,
  defaultValues,
<<<<<<< HEAD
<<<<<<< HEAD

  isSubmitting}: ReviewFormProps) {

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  isSubmitting}: ReviewFormProps) {

  const [hoveredStar, setHoveredStar] = useState<number>(0),
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  isSubmitting}: ReviewFormProps) {
<<<<<<< HEAD
  const [hoveredStar, setHoveredStar] = useState<number>(0);

=======
  const [hoveredStar, setHoveredStar] = useState<number>(0),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const form = useForm<ReviewFormValues>({
    defaultValues: defaultValues ? {
      rating: defaultValues.rating
      review_text: defaultValues.review_text
      communication_rating: defaultValues.communication_rating
      quality_rating: defaultValues.quality_rating
      timeliness_rating: defaultValues.timeliness_rating
      would_work_again: defaultValues.would_work_again
      is_anonymous: defaultValues.is_anonymous} : {
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
      rating: 0
      review_text: ""
      communication_rating: undefined
      quality_rating: undefined
      timeliness_rating: undefined
      would_work_again: undefined
      is_anonymous: false}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  });
  const handleSubmit = async (values: ReviewFormValues) => {
    const formattedData = {
      ...values
      project_id: projectId
      reviewee_id: revieweeId}
    const success = await onSubmit(formattedData);
    if (success) {
      form.reset()
    }
  }
  const watchRating = form.watch("rating");
<<<<<<< HEAD

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">

  },;
  const watchRating = form.watch("rating"),;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">;

=======
========
  isSubmitting}: ReviewFormProps) {;
  const [hoveredStar, setHoveredStar] = useState<number>(0);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
  const form = useForm<ReviewFormValues>({;
    defaultValues: defaultValues ? {;
      rating: defaultValues && defaultValues.rating,;
      review_text: defaultValues && defaultValues.review_text,;
      communication_rating: defaultValues && defaultValues.communication_rating,;
      quality_rating: defaultValues && defaultValues.quality_rating,;
      timeliness_rating: defaultValues && defaultValues.timeliness_rating,;
      would_work_again: defaultValues && defaultValues.would_work_again,;
      is_anonymous: defaultValues && defaultValues.is_anonymous} : {;
      rating: 0,;
      review_text: "",;
      communication_rating: undefined,;
      quality_rating: undefined,;
      timeliness_rating: undefined,;
      would_work_again: undefined,;
      is_anonymous: false}
  });
=======
<<<<<<< HEAD
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
=======
=======
  }),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleSubmit = async (values: ReviewFormValues) => {;
    const formattedData = {;
      ...values,;
      project_id: projectId,;
      reviewee_id: revieweeId},;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
    const success = await onSubmit(formattedData);
    if (success) {;
      form && form.reset();
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
  };
  const watchRating = form && form.watch("rating");
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-6">;
        {/* Main Rating */}
        <FormField
          control={form && form.control}
          name="rating"
          rules={{ required: "Rating is required" }}
=======

import { useState } from "react",;
import { Star } from "lucide-react",;
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import {;
  RadioGroup,;
  RadioGroupItem} from "@/components/ui/radio-group",;
import { Switch } from "@/components/ui/switch",;
import { Review } from "@/types/reviews",;
;
interface ReviewFormValues {;
  rating?:number,;
  review_text?:string,;
  communication_rating?:number,;
  quality_rating?:number,;
  timeliness_rating?:number,;
  would_work_again?:boolean,;
  is_anonymous?:boolean,;}
;
interface ReviewFormProps {;
  projectId:string,;
  revieweeId:string,;
  revieweeName:string,;
  onSubmit:(data:any) => Promise<boolean>, ;
  defaultValues?:Review,;
  isSubmitting:boolean;
}
;
export function ReviewForm({;
  projectId,;
  revieweeId,;
  revieweeName,;
  onSubmit,;
  defaultValues,;
  isSubmitting} ReviewFormProps) {;
  const [hoveredStar, setHoveredStar] = useState<number>(0),;
  ;
  const form = useForm<ReviewFormValues>({;
    defaultValues:defaultValues ? {;
      rating:defaultValues.rating,;
      review_text:defaultValues.review_text,;
      communication_rating:defaultValues.communication_rating,;
      quality_rating:defaultValues.quality_rating,;
      timeliness_rating:defaultValues.timeliness_rating,;
      would_work_again:defaultValues.would_work_again,;
      is_anonymous:defaultValues.is_anonymous} {;
      rating:0,;
      review_text:"",;
      communication_rating:undefined,;
      quality_rating:undefined,;
      timeliness_rating:undefined,;
      would_work_again:undefined,;
      is_anonymous:false}
  }),;
  ;
  const handleSubmit = async (values:ReviewFormValues) => {;
    const formattedData = {;
      ...values,;
      project_id:projectId,;
      reviewee_id:revieweeId},;
    ;
    const success = await onSubmit(formattedData),;
    if (success) {;
      form.reset(),;
    }
  },;
  ;
  const watchRating = form.watch("rating"),;
  ;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">;
        {/* Main Rating */}
        <FormField;
          control={form.control}
          name="rating";
          rules={{ required:"Rating is required" }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="block text-center mb-2">;
                How was your experience with {revieweeName}?;
              </FormLabel>;
              <FormControl>;
                <div className="flex justify-center gap-1">;
                  {[1, 2, 3, 4, 5].map((star) => (;
<<<<<<< HEAD
                    <button
                      key={star}
                      type="button"
                      onClick={() => field && field.onChange(star)}
=======
                    <button;
                      key={star}
                      type="button";
                      onClick={() => field.onChange(star)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="focus:outline-none transition-transform hover:scale-110";
                    >;
<<<<<<< HEAD
                      <Star
                        className={`h-10 w-10 ${
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

                          star <= (hoveredStar || field && field.value || 0)

========
                          star <= (hoveredStar || field && field.value || 0)
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
=======
                      <Star;
                        className={`h-10 w-10 ${;
                          star <= (hoveredStar || field.value || 0);
                            ? "fill-yellow-400 text-yellow-400";
                            :"text-gray-300";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        } transition-colors`}
                      />;
                    </button>;
                  ))}
                </div>;
              </FormControl>;
              <div className="text-center mt-1 h-5">;
                <FormMessage />;
              </div>;
            </FormItem>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

        />;


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
        {/* Review Text */}
        <FormField
          control={form && form.control}
          name="review_text"
          rules={{
            required: "Please provide feedback"
            minLength: {
              value: 20
              message: "Review must be at least 20 characters"}}}
=======
        ;
        {/* Review Text */}
        <FormField;
          control={form.control}
          name="review_text";
          rules={{;
            required:"Please provide feedback",;
            minLength:{;
              value:20,;
              message:"Review must be at least 20 characters"}}}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Your Review</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
                <Textarea
                  placeholder="Share your experience and feedback..."
                  className="min-h-24 resize-none"
interface ReviewFormProps {
  project_id: string,
  reviewee_id: string,
  reviewee_name: string,
  on_submit: (data: any) => Promise < boolean>,
  default_values?: Review;
  is_submitting: boolean;
}
export /**
 * ReviewForm - Function description
 */
function ReviewForm() {
  const [hovered_star, setHoveredStar] = useState < number>(0);
;
  const form = use_form < ReviewFormValues>({
    default_values: default_values ? {
      rating: default_values.rating,
      review_text: default_values.review_text,
      communication_rating: default_values.communication_rating,
      quality_rating: default_values.quality_rating,
      timeliness_rating: default_values.timeliness_rating,
      would_work_again: default_values.would_work_again,
      is_anonymous: default_values.is_anonymous} : {
=======
    const success = await onSubmit(formattedData),;
    if (success) {;
      form.reset();
    }
  },
  
  const watchRating = form.watch("rating"),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Main Rating */}
        <FormField
          control={form.control}
          name="rating"
          rules={{ required: "Rating is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-center mb-2">
                How was your experience with {revieweeName}?
              </FormLabel>
              <FormControl>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => field.onChange(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-10 w-10 ${
                          star <= (hoveredStar |field.value |0)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </FormControl>
              <div className="text-center mt-1 h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      rating: 0,
      review_text: "",
      communication_rating: undefined,
      quality_rating: undefined,
      timeliness_rating: undefined,
      would_work_again: undefined,
      is_anonymous: false}
<<<<<<< HEAD
  });
;
  const handle_submit = async (values: ReviewFormValues) => {
    const formatted_data = {
      ...values,
      project_id: project_id,
      reviewee_id: reviewee_id},
    const success = await on_submit (formatted_data);
    // Check condition
if ( {) {
  $2
}
      form.reset ();
    }
  }
;
  const watch_rating = form.watch ("rating");
;
  return (
    <Form {...form}>;
      <form on_submit={form.handle_submit (handle_submit)} className="space - y-6">;
        {/* Main Rating */}
        <FormField;
          control={form.control}
          name="rating";
          rules={{ required: "Rating is required" }}
          render={({ field }) => (
            <FormItem>;
              <FormLabel className="block text - center mb - 2">;
                How was your experience with {reviewee_name}?;
              </FormLabel>;
              <FormControl>;
                <div className="flex justify - center gap - 1">;
                  {[1, 2, 3, 4, 5].map ((star) => (
                    <button;
                      key={star}
                      type="button";
                      on_click={() => field.on_change (star)}
                      onMouseEnter={() => setHoveredStar (star)}
                      onMouseLeave={() => setHoveredStar (0)}
                      className="focus:outline - none transition - transform hover:scale - 110";
                    >;
                      <Star;
                        className={`h - 10 w - 10 ${
                          star <= (hovered_star || field.value || 0);
                            ? "fill - yellow - 400 text - yellow - 400";
                            : "text - gray - 300";
                        } transition - colors`}
                      />;
                    </button>))}
                </div>;
              </FormControl>;
              <div className="text - center mt - 1 h - 5">;
                <FormMessage />;
              </div>;
            </FormItem>)}
        />;
        {/* Review Text */}
        <FormField;
          control={form.control}
          name="review_text";
          rules={{
            required: "Please provide feedback",
            min_length: {
              value: 20,
              message: "Review must be at least 20 characters"}}}
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Your Review</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder="Share your experience and feedback...";
                  className="min - h-24 resize - none";
=======
                <Textarea;
                  placeholder="Share your experience and feedback...";
                  className="min-h-24 resize-none";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

========
<<<<<<< HEAD
        />;
=======
            </FormItem>;
          )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
        />;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* Additional Rating Categories (only shown if main rating is provided) */}
<<<<<<< HEAD
        {watchRating > 0 && (
          <div className="space-y-6 border-t pt-6">
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>

=======
        {watchRating > 0 && (;
          <div className="space-y-6 border-t pt-6">;
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx


=======

            

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
            {/* Communication */}
            <FormField
              control={form && form.control}
              name="communication_rating"
=======
            ;
            {/* Communication */}
            <FormField;
              control={form.control}
              name="communication_rating";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Communication</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <RadioGroup
                      onValueChange={(value) => field && field.onChange(parseInt(value))}
                      defaultValue={field && field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2">;
                          <FormControl>;
                            <RadioGroupItem value={value && value.toString()} />;
=======
                    <RadioGroup;
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem;
                          key={value}
                          className="flex items-center space-x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.toString()} />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;
<<<<<<< HEAD
                        </FormItem>;
                      ))}
=======
                        </FormItem>;                      ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

            />;


========
            />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
            {/* Quality */}
            <FormField
              control={form && form.control}
              name="quality_rating"
=======
            ;
            {/* Quality */}
            <FormField;
              control={form.control}
              name="quality_rating";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Quality of Work</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <RadioGroup
                      onValueChange={(value) => field && field.onChange(parseInt(value))}
                      defaultValue={field && field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2">;
                          <FormControl>;
                            <RadioGroupItem value={value && value.toString()} />;
=======
                    <RadioGroup;
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem;
                          key={value}
                          className="flex items-center space-x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.toString()} />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;
<<<<<<< HEAD
                        </FormItem>;
                      ))}
=======
                        </FormItem>;                      ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

            />;


========
            />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
            {/* Timeliness */}
            <FormField
              control={form && form.control}
              name="timeliness_rating"
=======
            ;
            {/* Timeliness */}
            <FormField;
              control={form.control}
              name="timeliness_rating";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Timeliness</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <RadioGroup
                      onValueChange={(value) => field && field.onChange(parseInt(value))}
                      defaultValue={field && field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2">;
                          <FormControl>;
                            <RadioGroupItem value={value && value.toString()} />;
=======
                    <RadioGroup;
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem;
                          key={value}
                          className="flex items-center space-x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.toString()} />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;
<<<<<<< HEAD
                        </FormItem>;
                      ))}
=======
                        </FormItem>;                      ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

            />;


========
            />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
            {/* Would Work Again */}
            <FormField
              control={form && form.control}
              name="would_work_again"
=======
            ;
            {/* Would Work Again */}
            <FormField;
              control={form.control}
              name="would_work_again";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem>;
                  <div className="flex items-center gap-2">;
                    <FormLabel>Would you work with {revieweeName} again?</FormLabel>;
                    <FormControl>;
                      <div className="flex items-center space-x-2">;
<<<<<<< HEAD
                        <Switch
                          checked={field && field.value}
                          onCheckedChange={field && field.onChange}
                        />;
                        <span className="text-sm text-muted-foreground">;
                          {field && field.value ? "Yes" : "No"}
            </FormItem>)}
        />;
        {/* Additional Rating Categories (only shown if main rating is provided) */}
        {watch_rating > 0 && (
          <div className="space - y-6 border - t pt - 6">;
            <h3 className="font - medium text - sm">Additional Ratings (Optional)</h3>;
            {/* Communication */}
            <FormField;
              control={form.control}
              name="communication_rating";
              render={({ field }) => (
                <FormItem className="space - y-2">;
                  <FormLabel > Communication</FormLabel>;
                  <FormControl>;
                    <RadioGroup;
                      onValueChange={(value) => field.on_change (parse_int (value))}
                      default_value={field.value?.to_string ()}
                      className="flex flex - wrap gap - 4";
                    >;
                      {[1, 2, 3, 4, 5].map ((value) => (
                        <FormItem;
                          key={value}
                          className="flex items - center space - x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.to_string ()} />;
                          </FormControl>;
                          <FormLabel className="cursor - pointer font - normal">;
                            {value}
                          </FormLabel>;
                        </FormItem>))}
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            {/* Quality */}
            <FormField;
              control={form.control}
              name="quality_rating";
              render={({ field }) => (
                <FormItem className="space - y-2">;
                  <FormLabel > Quality of Work</FormLabel>;
                  <FormControl>;
                    <RadioGroup;
                      onValueChange={(value) => field.on_change (parse_int (value))}
                      default_value={field.value?.to_string ()}
                      className="flex flex - wrap gap - 4";
                    >;
                      {[1, 2, 3, 4, 5].map ((value) => (
                        <FormItem;
                          key={value}
                          className="flex items - center space - x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.to_string ()} />;
                          </FormControl>;
                          <FormLabel className="cursor - pointer font - normal">;
                            {value}
                          </FormLabel>;
                        </FormItem>))}
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            {/* Timeliness */}
            <FormField;
              control={form.control}
              name="timeliness_rating";
              render={({ field }) => (
                <FormItem className="space - y-2">;
                  <FormLabel > Timeliness</FormLabel>;
                  <FormControl>;
                    <RadioGroup;
                      onValueChange={(value) => field.on_change (parse_int (value))}
                      default_value={field.value?.to_string ()}
                      className="flex flex - wrap gap - 4";
                    >;
                      {[1, 2, 3, 4, 5].map ((value) => (
                        <FormItem;
                          key={value}
                          className="flex items - center space - x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.to_string ()} />;
                          </FormControl>;
                          <FormLabel className="cursor - pointer font - normal">;
                            {value}
                          </FormLabel>;
                        </FormItem>))}
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            {/* Would Work Again */}
            <FormField;
              control={form.control}
              name="would_work_again";
              render={({ field }) => (
                <FormItem>;
                  <div className="flex items - center gap - 2">;
                    <FormLabel > Would you work with {reviewee_name} again?</FormLabel>;
                    <FormControl>;
                      <div className="flex items - center space - x-2">;
                        <Switch;
                          checked={field.value}
                          onCheckedChange={field.on_change}
                        />;
                        <span className="text - sm text - muted - foreground">;
                          {field.value ? "Yes" : "No"}
=======
                        <Switch;
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />;
                        <span className="text-sm text-muted-foreground">;
                          {field.value ? "Yes" :"No"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        </span>;
                      </div>;
                    </FormControl>;
                  </div>;
                  <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
        {/* Anonymous Review */}
        <FormField
          control={form && form.control}
          name="is_anonymous"
=======
                </FormItem>;              )}
            />;
          </div>;
        )}
        ;
        {/* Anonymous Review */}
        <FormField;
          control={form.control}
          name="is_anonymous";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          render={({ field }) => (;
            <FormItem>;
              <div className="flex items-center gap-2">;
                <FormControl>;
<<<<<<< HEAD
                  <Switch
                    checked={field && field.value}
                    onCheckedChange={field && field.onChange}
=======
                  <Switch;
                    checked={field.value}
                    onCheckedChange={field.onChange}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  />;
                </FormControl>;
                <FormLabel className="cursor-pointer font-normal">;
                  Submit anonymously;
                </FormLabel>;
              </div>;
              <p className="text-xs text-muted-foreground mt-1">;
                Anonymous reviews won't display your name but will still be linked to your account.;
              </p>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
        />;
<<<<<<< HEAD
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !form && form.formState.isValid}>;
          {isSubmitting ? "Submitting..." : defaultValues ? "Save Changes" : "Submit Review"}
<<<<<<< HEAD
=======
  }),;
  const handleSubmit = async (values: ReviewFormValues) => {;
    const formattedData = {;
      ...values,;
      project_id: projectId,;
      reviewee_id: revieweeId},;
    const success = await onSubmit(formattedData),;
    if (success) {;
      form.reset();
    }
  },
  
  const watchRating = form.watch("rating"),
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
=======
        
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  },;
  const watchRating = form.watch("rating"),;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Review Text */}
        <FormField
          control={form.control}
          name="review_text"
          rules={{
            required: "Please provide feedback"
            minLength: {
              value: 20

              message: "Review must be at least 20 characters"}}}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience and feedback..."
                  className="min-h-24 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Additional Rating Categories (only shown if main rating is provided) */}
        {watchRating > 0 && (
          <div className="space-y-6 border-t pt-6">
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>
<<<<<<< HEAD
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* Communication */}
            <FormField
              control={form.control}
              name="communication_rating"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Communication</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4"
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Quality */}
            <FormField
              control={form.control}
              name="quality_rating"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Quality of Work</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4"
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Timeliness */}
            <FormField
              control={form.control}
              name="timeliness_rating"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Timeliness</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4"
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Would Work Again */}
            <FormField
              control={form.control}
              name="would_work_again"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Would you work with {revieweeName} again?</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <span className="text-sm text-muted-foreground">
                          {field.value ? "Yes" : "No"}
                        </span>
                      </div>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        {/* Anonymous Review */}
        <FormField
          control={form.control}
          name="is_anonymous"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer font-normal">
                  Submit anonymously
                </FormLabel>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Anonymous reviews won't display your name but will still be linked to your account.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting |!form.formState.isValid}
        >
          {isSubmitting ? "Submitting..." : defaultValues ? "Save Changes" : "Submit Review"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </Button>
      </form>
    </Form>
  )
<<<<<<< HEAD

=======
        </Button>;
      </form>;
    </Form>;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
                </FormItem>)}
            />;
          </div>)}
        {/* Anonymous Review */}
        <FormField;
          control={form.control}
          name="is_anonymous";
          render={({ field }) => (
            <FormItem>;
              <div className="flex items - center gap - 2">;
                <FormControl>;
                  <Switch;
                    checked={field.value}
                    onCheckedChange={field.on_change}
                  />;
                </FormControl>;
                <FormLabel className="cursor - pointer font - normal">;
                  Submit anonymously;
                </FormLabel>;
              </div>;
              <p className="text - xs text - muted - foreground mt - 1">;
                Anonymous reviews won't display your name but will still be linked to your account.;
              </p>;
              <FormMessage />;
            </FormItem>)}
        />;
        <Button;
          type="submit";
          className="w - full";
          disabled={is_submitting || !form.form_state.is_valid}
        >;
          {is_submitting ? "Submitting..." : default_values ? "Save Changes" : "Submit Review"}
        </Button>;
      </form>;
    </Form>);
=======
        ;
        <Button;
          type="submit";
          className="w-full";
          disabled={isSubmitting || !form.formState.isValid}
        >;
          {isSubmitting ? "Submitting..." :defaultValues ? "Save Changes" :"Submit Review"}
        </Button>;
      </form>;
    </Form>;
  ),; import {
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
interface ReviewFormValues {
  rating?: number;
review text?: string;
communication rating?: number;
quality rating?: number;
timeliness rating?: number;
would work again?: boolean;
is anonymous?: boolean 
}interface ReviewFormProps {
  projectId: string;
revieweeId: string;
revieweeName: string;
onSubmit: (data: any) => Promise<boolean>;
defaultValues?: Review;
isSubmitting: boolean 
}export function ReviewForm ({
  projectId;
revieweeId;
revieweeName;
onSubmit;
defaultValues;
isSubmitting 
}: ReviewFormProps) {
  const [hoveredStar, setHoveredStar] = useState<number> (0);
defaultValues: defaultValues ? {
  return (<Form {
  ...form 
}> <form onSubmit= {
  form.handleSubmit (handleSubmit) 
}className="space-y-6" > {
  /* Main Rating */ 
}<FormField control= {
  form.control 
}name="rating" rules= {
  {
  required: "Rating is required" 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}render= {
  ({
  field 
}) => (<FormItem> revieweeName 
}? </FormLabel> <FormControl> className="focus:outline-none transition-transform hover:scale-110" > <Star className= {
  `h-10 w-10 $ {
  star <= (hoveredStar || field.value || 0) /> </button>) ) 
}</div> </FormControl> <div className="text-center mt-1 h-5" > <FormMessage /> </div> </FormItem>) 
}/> {
  /* Review Text */ 
}<FormField <FormItem> <FormLabel>Your Review</FormLabel> <FormControl> <Textarea placeholder="Share your experience and feedback..." className="min-h-24 resize-none" {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> {
  /* Additional Rating Categories (only shown if main rating is provided) */ 
}{
  watchRating > 0 && (<div className="space-y-6 border-t pt-6"> <h3 className="font-medium text-sm" >Additional Ratings (Optional) </h3> {
  /* Communication */ 
}<FormField <FormLabel>Communication</FormLabel> <FormControl> <RadioGroup onValueChange= {
  (value) => field.onChange (parseInt (value) ) 
}defaultValue= {
  field.value?.toString () 
}className="flex flex-wrap gap-4" > {
  [1, 2, 3, 4, 5].map ( (value) => (<FormItem key= {
  value 
}className="flex items-center space-x-2" > <FormControl> <RadioGroupItem value= {
  value.toString () 
}/> </FormControl> </FormLabel> </FormItem>) ) 
}</RadioGroup> </FormControl> <FormMessage /> </FormItem>) 
}/> {
  /* Quality */ 
}<FormField <FormLabel>Quality of Work</FormLabel> <FormControl> <RadioGroup onValueChange= {
  (value) => field.onChange (parseInt (value) ) 
}defaultValue= {
  field.value?.toString () 
}className="flex flex-wrap gap-4" > {
  [1, 2, 3, 4, 5].map ( (value) => (<FormItem key= {
  value 
}className="flex items-center space-x-2" > <FormControl> <RadioGroupItem value= {
  value.toString () 
}/> </FormControl> </FormLabel> </FormItem>) ) 
}</RadioGroup> </FormControl> <FormMessage /> </FormItem>) 
}/> {
  /* Timeliness */ 
}<FormField <FormLabel>Timeliness</FormLabel> <FormControl> <RadioGroup onValueChange= {
  (value) => field.onChange (parseInt (value) ) 
}defaultValue= {
  field.value?.toString () 
}className="flex flex-wrap gap-4" > {
  [1, 2, 3, 4, 5].map ( (value) => (<FormItem key= {
  value 
}className="flex items-center space-x-2" > <FormControl> <RadioGroupItem value= {
  value.toString () 
}/> </FormControl> </FormLabel> </FormItem>) ) 
}</RadioGroup> </FormControl> <FormMessage /> </FormItem>) 
}/> {
  /* Would Work Again */ 
}<FormField <FormItem> <div className="flex items-center gap-2"> <FormLabel>Would you work with {
  revieweeName 
}again?</FormLabel> <FormControl> <div className="flex items-center space-x-2"> <Switch checked= {
  field.value 
}onCheckedChange= {
  field.onChange 
}/> </span> </div> </FormControl> </div> <FormMessage /> </FormItem>) 
}/> </div>) 
}{
  /* Anonymous Review */ 
}<FormField <FormItem> <div className="flex items-center gap-2"> <FormControl> <Switch checked= {
  field.value 
}onCheckedChange= {
  field.onChange 
}/> </FormControl> <FormLabel className="cursor-pointer font-normal"> Submit anonymously </FormLabel> </div> <p className="text-xs text-muted-foreground mt-1" > Anonymous reviews won't display your name but will still be linked to your account. </p> <FormMessage /> </FormItem>) 
}/> <Button </Button> </form> </Form>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewForm.tsx
=======
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
