<<<<<<< HEAD
<<<<<<< HEAD
import {logErrorToProduction} from '@/utils/productionLogger';
import React from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { useRouter } from "next/router";
import Image from 'next/image', // Import next/image
import {logErrorToProduction} from '@/utils/productionLogger';
import React from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import next/image
import { logErrorToProduction } from '@/utils/productionLogger'
import {

  Form
  FormControl
  FormDescription
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AIListingGenerator } from '@/components/listing/AIListingGenerator'
import { Sparkles } from 'lucide-react'
// Define the form schema with zod
const productSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters')
  description: z.string().min(10, 'Description must be at least 10 characters')
  price: z
    .string()
    .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: 'Price must be a valid number'
    })
  category: z.string().min(1, 'Please select a category')
  image:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  video:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  model:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  tags: z.string().optional()
})
// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>
export function ProductSubmissionForm() {
  const { user } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [imagePreview, setImagePreview] = React.useState(null as string | null)
  const [activeTab, setActiveTab] = React.useState('manual')
import {logErrorToProduction} from '@/utils/productionLogger',
=======
try {
      // Create the product listing;
      const product_data = {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { useRouter } from "next/router",
import Image from 'next/image', // Import next/image
import {logErrorToProduction} from '@/utils/productionLogger',
  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema)
    defaultValues: {
<<<<<<< HEAD
import {logErrorToProduction} from '@/utils/productionLogger',
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema)
    defaultValues: {
      title: ''
      description: ''
      price: ''
      category: ''
      video: undefined
      model: undefined
      tags: ''
    }
  })
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      title: "",
      description: "",
      price: "",
      category: "",
      video: undefined,
      model: undefined,
      tags: '',
    },;
  });
  // Handle image upload preview;
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
import React from 'react';
import { use_form, ControllerRenderProps } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import z from 'zod';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { use_toast } from '@/hooks / use - toast';
import { use_router } from 'next / router';
import Image from 'next / image'; // Import next / image;
import { logErrorToProduction } from '@/utils / production_logger';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components / ui / tabs';
import { AIListingGenerator } from '@/components / listing / AIListingGenerator';
import { Sparkles } from 'lucide-react';
// Define the form schema with zod;
const product_schema = z.object ({
  title: z.string ().min (3, 'Title must be at least 3 characters'),
  description: z.string ().min (10, 'Description must be at least 10 characters'),
  price: z;
    .string ();
    .refine (val => !isNaN (parse_float (val)) && parse_float (val) >= 0, {
      message: 'Price must be a valid number',
    }),
  category: z.string ().min (1, 'Please select a category'),
  image:;
    typeof window === 'undefined';
      ? z.any ().optional ();
      : z.instanceof (File).optional (),
  video:;
    typeof window === 'undefined';
      ? z.any ().optional ();
      : z.instanceof (File).optional (),
  model:;
    typeof window === 'undefined';
      ? z.any ().optional ();
      : z.instanceof (File).optional (),
  tags: z.string ().optional (),
});
// Type for our form values;
type ProductFormValues = z.infer < typeof product_schema>;
export /**
 * ProductSubmissionForm - Function description
 */
function ProductSubmissionForm() {
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const router = use_router ();
  const [is_submitting, setIsSubmitting] = React.useState (false);
  const [image_preview, setImagePreview] = React.useState (null as string | null);
  const [active_tab, setActiveTab] = React.useState ('manual');
  // Initialize the form;
  const form = use_form < ProductFormValues>({
    resolver: zod_resolver (product_schema),
    default_values: {
      title: '',
      description: '',
      price: '',
      category: '',
      video: undefined,
      model: undefined,
      tags: '',
    },
  });
  // Handle image upload preview;
  const handleImageChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const file = e.target.files?.[0];    // Check condition
if ( {) {
  $2
}
      form.set_value ('image', file);
      const reader = new FileReader ();
    const file = e.target.files?.[0];    if (file) {
      form.setValue('image', file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];    if (file) {
      form.setValue('video', file)
    }
  }
  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];    if (file) {
      form.setValue('model', file)
    }
  }
  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue('description', content.description)
    form.setValue('tags', content.tags.join(', '))
    // Set a default price as the middle of the suggested range
    const averagePrice = (
      (content.suggestedPrice.min + content.suggestedPrice.max) /
      2
    ).toFixed(2)
    form.setValue('price', averagePrice)
    // Switch to the manual tab to show applied content
    setActiveTab('manual')
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: "",
      description: "",
      price: "",
      category: "",
      video: undefined,
      model: undefined,
      tags: ""}}),
  
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("image", file),
      const reader = new FileReader(),
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      },
      reader.readAsDataURL(file)
    }
  },

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("video", file)
    }
  },

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("model", file)
    }
  },

  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue("description", content.description),
    form.setValue("tags", content.tags.join(", ")),
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),
    form.setValue("price", averagePrice),
    
    // Switch to the manual tab to show applied content
    setActiveTab("manual")
  },

  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({
<<<<<<< HEAD
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({
        title: 'Authentication Required'
        description: 'You must be logged in to publish products'
        variant: 'destructive'
        title: 'Authentication Required'
        description: 'You must be logged in to publish products'
        variant: 'destructive'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: 'Authentication Required',
        description: 'You must be logged in to publish products',
        variant: 'destructive',
      })
      return;
    }
    setIsSubmitting(true)
<<<<<<< HEAD
    try {
      // Create the product listing
      const productData = {
        title: values.title
        description: values.description
        price: parseFloat(values.price)
        category: values.category
        currency: 'USD', // Default currency
        tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : []
        author: {
          name: user.displayName |'Anonymous Creator'
          id: user.id
        }
        createdAt: new Date().toISOString()
      }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Authentication Required",
        description: "You must be logged in to publish products",
        variant: "destructive"}),
      return
<<<<<<< HEAD
  // Handle form submission;
  const on_submit = async (values: ProductFormValues, ) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Authentication Required',
        description: 'You must be logged in to publish products',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true),
    
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }

    setIsSubmitting(true),
    
    try {
      // Create the product listing
      const productData = {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
try {
      // Create the product listing;
      const product_data = {
        title: values.title,
        description: values.description,
          name: user.displayName || 'Anonymous Creator',
          id: user.id,
        },
        created_at: new Date ().toISOString (),
      }
        price: parseFloat(values.price),
        category: values.category,
        currency: "USD", // Default currency
        tags: values.tags ? values.tags.split().map(tag => tag.trim()) : [],
        author: {
          name: user.displayName || 'Anonymous Creator',
          id: user.id,
        },
        createdAt: new Date().toISOString(),
      }
          name: user.displayName || "Anonymous Creator",
          id: user.id},
        createdAt: new Date().toISOString()},
      
      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
        .single()
      if (productError) {
        throw new Error(productError.message)
      }
      let imagePublicUrl: string | undefined
      // If we have an image, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(imagePath, values.image)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        // Get the public URL for the image
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(imagePath)
        imagePublicUrl = publicUrlData.publicUrl
        // Update the product with the image URL
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({
            images: [imagePublicUrl]
          })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Upload video if provided
      if (values.video) {
        const videoPath = `product_videos/${productRecord.id}/${values.video.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(videoPath, values.video)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(videoPath)
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ video_url: publicUrlData.publicUrl })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Upload model if provided
      if (values.model) {
        const modelPath = `product_models/${productRecord.id}/${values.model.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(modelPath, values.model)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(modelPath)
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ model_url: publicUrlData.publicUrl })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Send listing to moderation service
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        title: values.title,
        description: values.description,
        price: parse_float (values.price),
        category: values.category,
        currency: 'USD', // Default currency;
        tags: values.tags ? values.tags.split (', ').map (tag => tag.trim ()) : [],
        author: {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      let imagePublicUrl: string | undefined;
      // If we have an image, upload it;
      // Check condition
if ( {) {
  $2
}
        const image_path = `product_images/${product_record.id}/${values.image.name}`;
        const { error: upload_error } = await supabase.storage;
          .from ('products');
          .upload (image_path, values.image);
        // Check condition
if ( {) {
  $2
}
          throw new Error (upload_error.message);
        }
        // Get the public URL for the image;
        const { data: publicUrlData } = supabase.storage;
          .from ('products');
          .getPublicUrl (image_path);
        imagePublicUrl = publicUrlData.public_url;
        // Update the product with the image URL;
        const { error: update_error } = await supabase;
          .from ('product_listings');
          .update ({
            images: [imagePublicUrl],
          });
          .eq ('id', product_record.id);
        // Check condition
if ( {) {
  $2
}
          throw new Error (update_error.message);
        }
      }
      // Upload video if provided;
      // Check condition
if ( {) {
  $2
}
        const video_path = `product_videos/${product_record.id}/${values.video.name}`;
        const { error: upload_error } = await supabase.storage;
          .from ('products');
          .upload (video_path, values.video);
        // Check condition
if ( {) {
  $2
}
          throw new Error (upload_error.message);
        }
        const { data: publicUrlData } = supabase.storage;
          .from ('products');
          .getPublicUrl (video_path);
        const { error: update_error } = await supabase;
          .from ('product_listings');
          .update ({ video_url: publicUrlData.public_url });
          .eq ('id', product_record.id);
        // Check condition
if ( {) {
  $2
}
          throw new Error (update_error.message);
        }
      }
      // Upload model if provided;
      // Check condition
if ( {) {
  $2
}
        const model_path = `product_models/${product_record.id}/${values.model.name}`;
        const { error: upload_error } = await supabase.storage;
          .from ('products');
          .upload (model_path, values.model);
        // Check condition
if ( {) {
  $2
}
          throw new Error (upload_error.message);
        }
        const { data: publicUrlData } = supabase.storage;
          .from ('products');
          .getPublicUrl (model_path);
        const { error: update_error } = await supabase;
          .from ('product_listings');
          .update ({ model_url: publicUrlData.public_url });
          .eq ('id', product_record.id);
        // Check condition
if ( {) {
  $2
}
          throw new Error (update_error.message);
        }
      }
      // Send listing to moderation service;
<<<<<<< HEAD
      try {
        await supabase.functions.invoke('moderate-listing', {
          body: {
      try {
        await supabase.functions.invoke('moderate-listing', {
          body: {
            listingId: productRecord.id
            listingType: 'product'
            description: values.description
            images: imagePublicUrl ? [imagePublicUrl] : []
            sellerId: user.id
          }
        })
=======

      try {
        await supabase.functions.invoke ('moderate - listing', {
          body: {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            listing_id: product_record.id,
            listing_type: 'product',
            description: values.description,
            images: imagePublicUrl ? [imagePublicUrl] : [],
            seller_id: user.id,
          },
        });
<<<<<<< HEAD
      } catch (err) {
        logErrorToProduction('Error invoking moderation:', { data: err })
      }
      } catch (err) {
        logErrorToProduction('Error invoking moderation:', { data: err })
      }
      // Show success message
      toast({
        title: 'Product Published!'
        description: 'Your product has been successfully published on Zion.'
      })
=======

      } catch (err) {
        logErrorToProduction ('Error invoking moderation:', { data: err });
      }


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import next/image;
import { logErrorToProduction } from '@/utils/productionLogger';



<<<<<<< HEAD
=======
          name: user.displayName || "Anonymous Creator",
          id: user.id},
        createdAt: new Date().toISOString()},
      
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
<<<<<<< HEAD

=======
        .single()
      if (productError) {
        throw new Error(productError.message)
      }
      let imagePublicUrl: string | undefined
      // If we have an image, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(imagePath, values.image)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        // Get the public URL for the image
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(imagePath)
        imagePublicUrl = publicUrlData.publicUrl
        // Update the product with the image URL
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({
            images: [imagePublicUrl]
          })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Upload video if provided
      if (values.video) {
        const videoPath = `product_videos/${productRecord.id}/${values.video.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(videoPath, values.video)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(videoPath)
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ video_url: publicUrlData.publicUrl })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Upload model if provided
      if (values.model) {
        const modelPath = `product_models/${productRecord.id}/${values.model.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(modelPath, values.model)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(modelPath)
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ model_url: publicUrlData.publicUrl })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Send listing to moderation service
      try {
        await supabase.functions.invoke('moderate-listing', {
          body: {
            listingId: productRecord.id
            listingType: 'product'
            description: values.description
            images: imagePublicUrl ? [imagePublicUrl] : []
            sellerId: user.id
          }
        })
      } catch (err) {
        logErrorToProduction('Error invoking moderation:', { data: err })
      }
      // Show success message
      toast({
        title: 'Product Published!'
        description: 'Your product has been successfully published on Zion.'
      })
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single(),
        
      if (productError) {
        throw new Error(productError.message)
import React from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import z from "zod",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { useRouter } from "next/router",;
import Image from 'next/image', // Import next/image;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
<<<<<<< HEAD
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",;
import { Sparkles } from 'lucide-react';
// Define the form schema with zod;
const productSchema = z.object({;
  title: z.string().min(3, "Title must be at least 3 characters"),;
  description: z.string().min(10, "Description must be at least 10 characters"),;
  price: z;
    .string();
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;
      message: "Price must be a valid number"}),;
  category: z.string().min(1, "Please select a category"),;
  image: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),;
  video: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),;
  model: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),;
  tags: z.string().optional()}),;
// Type for our form values;
type ProductFormValues = z.infer<typeof productSchema>,;
export function ProductSubmissionForm() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const router = useRouter(),;
  const [isSubmitting, setIsSubmitting] = React.useState(false),;
  const [imagePreview, setImagePreview] = React.useState(null as string | null),;
  const [activeTab, setActiveTab] = React.useState("manual"),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AIListingGenerator } from '@/components/listing/AIListingGenerator';
import { Sparkles } from 'lucide-react';
// Define the form schema with zod;
const productSchema = z && z.object({;
  title: z && z.string().min(3, 'Title must be at least 3 characters'),;
  description: z && z.string().min(10, 'Description must be at least 10 characters'),;
  price: z;
    .string();
    .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;
      message: 'Price must be a valid number',;
    }),;
  category: z && z.string().min(1, 'Please select a category'),;
  image:;
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  video:;
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  model:;
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  tags: z && z.string().optional(),;
});
// Type for our form values;
type ProductFormValues = z && z.infer<typeof productSchema>;

export function ProductSubmissionForm() {;
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React && React.useState(false);
  const [imagePreview, setImagePreview] = React && React.useState(null as string | null);
  const [activeTab, setActiveTab] = React && React.useState('manual');

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;
    defaultValues: {;
<<<<<<< HEAD
<<<<<<< HEAD
      title: "",;
      description: "",;
      price: "",;
      category: "",;
      video: undefined,;
      model: undefined,;
      tags: ""}}),;
  // Handle image upload preview;
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("image", file),;
      const reader = new FileReader(),;
      reader.onloadend = () => {;
        setImagePreview(reader.result as string);
      },;
      reader.readAsDataURL(file);
    }
  },;
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("video", file);
    }
  },;
  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("model", file);
    }
  },;
  // Apply AI-generated content to the form;
  const handleApplyGenerated = (content: any) => {;
    form.setValue("description", content.description),;
    form.setValue("tags", content.tags.join(", ")),;
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),;
    form.setValue("price", averagePrice),;
    // Switch to the manual tab to show applied content;
    setActiveTab("manual");
  },;
  // Handle form submission;
  const onSubmit = async (values: ProductFormValues) => {;
    if (!user) {;
      toast({;
        title: "Authentication Required",;
        description: "You must be logged in to publish products",;
        variant: "destructive"}),;
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // Create the product listing;
      const productData = {;
        title: values.title,;
        description: values.description,;
        price: parseFloat(values.price),;
        category: values.category,;
        currency: "USD", // Default currency;
        tags: values.tags ? values.tags.split().map(tag => tag.trim()) : [],;
        author: {;
          name: user.displayName || "Anonymous Creator",;
          id: user.id},;
        createdAt: new Date().toISOString()},;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: '',;
      description: '',;
      price: '',;
      category: '',;
      video: undefined,;
      model: undefined,;
      tags: '',;
    },;
  });

  // Handle image upload preview;
  const handleImageChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;
      form && form.setValue('image', file);
      const reader = new FileReader();
      reader && reader.onloadend = () => {;
        setImagePreview(reader && reader.result as string);
      };
      reader && reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;
      form && form.setValue('video', file);
    }
  };

  const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;
      form && form.setValue('model', file);
    }
  };

  // Apply AI-generated content to the form;
  const handleApplyGenerated = (content: any) => {;
    form && form.setValue('description', content && content.description);
    form && form.setValue('tags', content && content.tags.join(', '));
    // Set a default price as the middle of the suggested range;
    const averagePrice = (;
      (content && content.suggestedPrice.min + content && content.suggestedPrice.max) /;
      2;
    ).toFixed(2);
    form && form.setValue('price', averagePrice);

    // Switch to the manual tab to show applied content;
    setActiveTab('manual');
  };

  // Handle form submission;
  const onSubmit = async (values: ProductFormValues,) => {;
    if (!user) {;
      toast({;
        title: 'Authentication Required',;
        description: 'You must be logged in to publish products',;
        variant: 'destructive',;
      });
      return;
    }

    setIsSubmitting(true);

    try {;
      // Create the product listing;
      const productData = {;
        title: values && values.title,;
        description: values && values.description,;
        price: parseFloat(values && values.price),;
        category: values && values.category,;
        currency: 'USD', // Default currency;
        tags: values && values.tags ? values && values.tags.split(',').map(tag => tag && tag.trim()) : [],;
        author: {;
          name: user && user.displayName || 'Anonymous Creator',;
          id: user && user.id,;
        },;
        createdAt: new Date().toISOString(),;
      };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data: productRecord, error: productError } = await supabase;
        .from('product_listings');
        .insert([productData]);
        .select('id');
<<<<<<< HEAD
<<<<<<< HEAD
        .single(),;
      if (productError) {;
        throw new Error(productError.message);
      }
;
      let imagePublicUrl: string | undefined,;
      // If we have an image, upload it;
      if (values.image) {;
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`,;
        const { error: uploadError } = await supabase.storage;
          .from('products');
          .upload(imagePath, values.image),;
        if (uploadError) {;
          throw new Error(uploadError.message);
        }
;
        // Get the public URL for the image;
        const { data: publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(imagePath),;
        imagePublicUrl = publicUrlData.publicUrl,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single();

      if (productError) {;
        throw new Error(productError && productError.message);
      }

      let imagePublicUrl: string | undefined;

      // If we have an image, upload it;
      if (values && values.image) {;
        const imagePath = `product_images/${productRecord && productRecord.id}/${values && values.image.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(imagePath, values && values.image);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        // Get the public URL for the image;
        const { data: publicUrlData } = supabase && supabase.storage;
          .from('products');
          .getPublicUrl(imagePath);
        imagePublicUrl = publicUrlData && publicUrlData.publicUrl;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Update the product with the image URL;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({;
<<<<<<< HEAD
<<<<<<< HEAD
            images: [imagePublicUrl];
          });
          .eq('id', productRecord.id),;
      if (updateError) {;
        throw new Error(updateError.message);
      }
    }
;
      // Upload video if provided;
      if (values.video) {;
        const videoPath = `product_videos/${productRecord.id}/${values.video.name}`,;
        const { error: uploadError } = await supabase.storage;
          .from('products');
          .upload(videoPath, values.video),;
        if (uploadError) {;
          throw new Error(uploadError.message);
        }
;
        const { data: publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(videoPath),;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ video_url: publicUrlData.publicUrl });
          .eq('id', productRecord.id),;
        if (updateError) {;
          throw new Error(updateError.message);
        }
      }
;
      // Upload model if provided;
      if (values.model) {;
        const modelPath = `product_models/${productRecord.id}/${values.model.name}`,;
        const { error: uploadError } = await supabase.storage;
          .from('products');
          .upload(modelPath, values.model),;
        if (uploadError) {;
          throw new Error(uploadError.message);
        }
;
        const { data: publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(modelPath),;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ model_url: publicUrlData.publicUrl });
          .eq('id', productRecord.id),;
        if (updateError) {;
          throw new Error(updateError.message);
        }
      }
;
      // Send listing to moderation service;
      try {;
        await supabase.functions.invoke('moderate-listing', {;
          body: {;
            listingId: productRecord.id,;
            listingType: 'product',;
            description: values.description,;
            images: imagePublicUrl ? [imagePublicUrl] : [],;
            sellerId: user.id}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            images: [imagePublicUrl],;
          });
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Upload video if provided;
      if (values && values.video) {;
        const videoPath = `product_videos/${productRecord && productRecord.id}/${values && values.video.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(videoPath, values && values.video);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        const { data: publicUrlData } = supabase && supabase.storage;
          .from('products');
          .getPublicUrl(videoPath);

        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ video_url: publicUrlData && publicUrlData.publicUrl });
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Upload model if provided;
      if (values && values.model) {;
        const modelPath = `product_models/${productRecord && productRecord.id}/${values && values.model.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(modelPath, values && values.model);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        const { data: publicUrlData } = supabase && supabase.storage;
          .from('products');
          .getPublicUrl(modelPath);

        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ model_url: publicUrlData && publicUrlData.publicUrl });
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Send listing to moderation service;
      try {;
        await supabase && supabase.functions.invoke('moderate-listing', {;
          body: {;
            listingId: productRecord && productRecord.id,;
            listingType: 'product',;
            description: values && values.description,;
            images: imagePublicUrl ? [imagePublicUrl] : [],;
            sellerId: user && user.id,;
          },;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        });
      } catch (err) {;
        logErrorToProduction('Error invoking moderation:', { data: err });
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      // Show success message
      toast({
        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Redirect to product page
      router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: 'Publication Failed',

        title: 'Publication Failed'
        title: 'Publication Failed',
=======

        title: 'Publication Failed',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        title: 'Publication Failed',

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        description:
          error instanceof Error ? error.message : 'An unknown error occurred'
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
      // Show success message;
      toast({;
        title: 'Product Published!',;
        description: 'Your product has been successfully published on Zion.',;
      });
      // Redirect to product page;
      router && router.push(`/marketplace/listing/${productRecord && productRecord.id}`);
    } catch (error) {;
      toast({;
        title: 'Publication Failed',;
        description:;
          error instanceof Error ? error && error.message : 'An unknown error occurred',;
        variant: 'destructive',;
      });
    } finally {;
      setIsSubmitting(false);
    }
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
    }
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
      <TabsContent value='manual'>
<<<<<<< HEAD
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>;
      <TabsList className='grid grid-cols-2 mb-6'>;
        <TabsTrigger
          value='manual'
          className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger
          value='ai'
=======
      
      <TabsContent value="manual">


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          <Sparkles className='h-4 w-4 mr-2' />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <TabsContent value='manual'>;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-6'>;
            <FormField

<<<<<<< HEAD
            <FormField
              control={form && form.control}
              name='title'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Show success message;
      toast ({
        title: 'Product Published!',
        description: 'Your product has been successfully published on Zion.',
      });
      // Redirect to product page;
      router.push (`/marketplace / listing/${product_record.id}`);
    } catch (error) {
      toast ({
        title: 'Publication Failed',
        description:;
          error instanceof Error ? error.message : 'An unknown error occurred',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <Tabs value={active_tab} onValueChange={setActiveTab} className='w - full'>;
      <TabsList className='grid grid - cols - 2 mb - 6'>;
        <TabsTrigger;
          value='manual';
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger;
          value='ai';
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;
          <Sparkles className='h - 4 w - 4 mr - 2' />;
          AI - Powered Creation;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value='manual'>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (on_submit)} className='space - y-6'>;
            <FormField;
              control={form.control}
<<<<<<< HEAD
      <TabsContent value='manual'>
      
      <TabsContent value="manual">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              name='title'
              render={({
                field
              }: {
<<<<<<< HEAD
<<<<<<< HEAD
                field: ControllerRenderProps<ProductFormValues, 'title'>
              }) => {
                const { onChange, onBlur, value, ref } = field; return (
              name='title';
              render={({
                field
              }: {
                field: ControllerRenderProps<ProductFormValues, 'title'>;
              }) => {;
                const { onChange, onBlur, value, ref } = field;                return (
                  <FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input
=======

              control={form.control}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                field: ControllerRenderProps<ProductFormValues, 'title'>
              }) => {
                const { onChange, onBlur, value, ref } = field; return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              name="title"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {
                const { onChange, onBlur, value, ref } = field,
                return (
<<<<<<< HEAD
<<<<<<< HEAD
                        placeholder='Enter product title'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}                      />
                    </FormControl>
                    <FormDescription>
                      Create a compelling title that describes your product
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name='description'
              render={({
                field
              }: {
                field: ControllerRenderProps<ProductFormValues, 'description'>
              }) => (                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Describe your product in detail...'
                      className='min-h-32'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                field: ControllerRenderProps<ProductFormValues, 'title'>;
              }) => {;
                const { onChange, onBlur, value, ref } = field;                return (
                  <FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input

                        ref={ref}                      />;

                        placeholder="Enter product title"
;
      // Show success message;
      toast({;
        title: "Product Published!",;
        description: "Your product has been successfully published on Zion."}),;
      // Redirect to product page;
      router.push(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {;
      toast({;
        title: "Publication Failed",;
        description: error instanceof Error ? error.message : "An unknown error occurred",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  },;
<<<<<<< HEAD
                        ref={ref}                      />;
import React from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import z from "zod",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { useRouter } from "next/router",;
import Image from 'next/image', // Import next/image;
import {logErrorToProduction} from '@/utils/productionLogger',;
;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",;
import { Sparkles } from 'lucide-react';
;
// Define the form schema with zod;
const productSchema = z.object({;
  title:z.string().min(3, "Title must be at least 3 characters"),;
  description:z.string().min(10, "Description must be at least 10 characters"),;
  price:z;
    .string();
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;
      message:"Price must be a valid number"}),;
  category:z.string().min(1, "Please select a category"),;
  image:typeof window === 'undefined' ? z.any().optional() :z.instanceof(File).optional(),;
  video:typeof window === 'undefined' ? z.any().optional() :z.instanceof(File).optional(),;
  model:typeof window === 'undefined' ? z.any().optional() :z.instanceof(File).optional(),;
  tags:z.string().optional()}),;
;
// Type for our form values;
type ProductFormValues = z.infer<typeof productSchema>,;
;
export function ProductSubmissionForm() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const router = useRouter(),;
  const [isSubmitting, setIsSubmitting] = React.useState(false),;
  const [imagePreview, setImagePreview] = React.useState(null as string | null),;
  const [activeTab, setActiveTab] = React.useState("manual"),;
  ;
  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver:zodResolver(productSchema),;
    defaultValues:{;
      title:"",;
      description:"",;
      price:"",;
      category:"",;
      video:undefined,;
      model:undefined,;
      tags:""}}),;
  ;
  // Handle image upload preview;
  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("image", file),;
      const reader = new FileReader(),;
      reader.onloadend = () => {;
        setImagePreview(reader.result as string),;
      },;
      reader.readAsDataURL(file),;
    }
  },;
;
  const handleVideoChange = (e:React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("video", file),;
    }
  },;
;
  const handleModelChange = (e:React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("model", file),;
    }
  },;
;
  // Apply AI-generated content to the form;
  const handleApplyGenerated = (content:any) => {;
    form.setValue("description", content.description),;
    form.setValue("tags", content.tags.join(", ")),;
    ;
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),;
    form.setValue("price", averagePrice),;
    ;
    // Switch to the manual tab to show applied content;
    setActiveTab("manual"),;
  },;
;
  // Handle form submission;
  const onSubmit = async (values:ProductFormValues) => {;
    if (!user) {;
      toast({;
        title:"Authentication Required",;
        description:"You must be logged in to publish products",;
        variant:"destructive"}),;
      return,;
    }
;
    setIsSubmitting(true),;
    ;
    try {;
      // Create the product listing;
      const productData = {;
        title:values.title,;
        description:values.description,;
        price:parseFloat(values.price),;
        category:values.category,;
        currency:"USD", // Default currency;
        tags:values.tags ? values.tags.split().map(tag => tag.trim()) :[],;
        author:{;
          name:user.displayName || "Anonymous Creator",;
          id:user.id},;
        createdAt:new Date().toISOString()},;
      ;
      const { data:productRecord, error:productError } = await supabase;
        .from('product_listings');
        .insert([productData]);
        .select('id');
        .single(),;
        ;
      if (productError) {;
        throw new Error(productError.message),;
      }
;
      let imagePublicUrl:string | undefined,;
;
      // If we have an image, upload it;
      if (values.image) {;
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`,;
        const { error:uploadError } = await supabase.storage;
          .from('products');
          .upload(imagePath, values.image),;
          ;
        if (uploadError) {;
          throw new Error(uploadError.message),;
        }
        ;
        // Get the public URL for the image;
        const { data:publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(imagePath),;
        imagePublicUrl = publicUrlData.publicUrl,;
          ;
        // Update the product with the image URL;
        const { error:updateError } = await supabase;
          .from('product_listings');
          .update({;
            images:[imagePublicUrl];
          });
          .eq('id', productRecord.id),;
          ;
      if (updateError) {;
        throw new Error(updateError.message),;
      }
    }
;
      // Upload video if provided;
      if (values.video) {;
        const videoPath = `product_videos/${productRecord.id}/${values.video.name}`,;
        const { error:uploadError } = await supabase.storage;
          .from('products');
          .upload(videoPath, values.video),;
;
        if (uploadError) {;
          throw new Error(uploadError.message),;
        }
;
        const { data:publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(videoPath),;
;
        const { error:updateError } = await supabase;
          .from('product_listings');
          .update({ video_url:publicUrlData.publicUrl });
          .eq('id', productRecord.id),;
;
        if (updateError) {;
          throw new Error(updateError.message),;
        }
      }
;
      // Upload model if provided;
      if (values.model) {;
        const modelPath = `product_models/${productRecord.id}/${values.model.name}`,;
        const { error:uploadError } = await supabase.storage;
          .from('products');
          .upload(modelPath, values.model),;
;
        if (uploadError) {;
          throw new Error(uploadError.message),;
        }
;
        const { data:publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(modelPath),;
;
        const { error:updateError } = await supabase;
          .from('product_listings');
          .update({ model_url:publicUrlData.publicUrl });
          .eq('id', productRecord.id),;
;
        if (updateError) {;
          throw new Error(updateError.message),;
        }
      }
;
      // Send listing to moderation service;
      try {;
        await supabase.functions.invoke('moderate-listing', {;
          body:{;
            listingId:productRecord.id,;
            listingType:'product',;
            description:values.description,;
            images:imagePublicUrl ? [imagePublicUrl] :[],;
            sellerId:user.id}
        }),;
      } catch (err) {;
        logErrorToProduction('Error invoking moderation:', { data:err }),;
      }
      ;
      // Show success message;
      toast({;
        title:"Product Published!",;
        description:"Your product has been successfully published on Zion."}),;
      ;
      // Redirect to product page;
      router.push(`/marketplace/listing/${productRecord.id}`),;
    } catch (error) {;
      toast({;
        title:"Publication Failed",;
        description:error instanceof Error ? error.message :"An unknown error occurred",;
        variant:"destructive"}),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (;
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
      <TabsList className="grid grid-cols-2 mb-6">;
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          <Sparkles className="h-4 w-4 mr-2" />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;
<<<<<<< HEAD
      ;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <TabsContent value="manual">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
            <FormField;
              control={form.control}
              name="title";
<<<<<<< HEAD
              render={({ field } { field:ControllerRenderProps<ProductFormValues "title"> }) => {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {;
                const { onChange, onBlur, value, ref } = field,;
                return (;
                  <FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input;
                        placeholder="Enter product title";
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                      />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </FormControl>;
                    <FormDescription>;
                      Create a compelling title that describes your product;
                    </FormDescription>;
                    <FormMessage />;
                  </FormItem>;
<<<<<<< HEAD
<<<<<<< HEAD
            <FormField
              control={form && form.control}
              name='description'
                field: ControllerRenderProps < ProductFormValues, 'title'>;
              }) => {
                const { on_change, on_blur, value, ref } = field; return (
                );
              }}
            />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                );
              }}
            />;

                field: ControllerRenderProps < ProductFormValues, 'title'>;
              }) => {
                const { on_change, on_blur, value, ref } = field; return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <FormField;
              control={form.control}
              name="description"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your product in detail..."
                      className="min-h-32"
              name="description";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (;
                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Describe your product in detail...";
                      className="min-h-32";
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a detailed description of what you're offering
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='price'
                render={({
                  field
                }: {
                  field: ControllerRenderProps<ProductFormValues, 'price'>
                }) => (                  <FormItem>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
                name="price"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (
                  <FormItem>
                name='price'
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<ProductFormValues, 'price'>
                }) => (                  <FormItem>
                name="price"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (
                  <FormItem>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
                )}
              />
              <FormField
=======

            />;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <FormField;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                )}
              />
              <FormField
                control={form.control}
                name='category'
                render={({
                  field
                }: {
                  field: ControllerRenderProps<ProductFormValues, 'category'>
                }) => (                  <FormItem>
            />;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <FormField;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                control={form.control}
                name="price";
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (;
                  <FormItem>;
                    <FormLabel > Product Title</FormLabel>;
                    <FormControl>;
                      <Input;
                        placeholder='Enter product title';
                        on_change={on_change}
                        on_blur={on_blur}
                        value={value}
                        ref={ref}                      />;
                    </FormControl>;
                    <FormDescription>;
                      Create a compelling title that describes your product;
                    </FormDescription>;
                    <FormMessage />;
<<<<<<< HEAD
                  </FormItem>);
              }}
            />;
            <FormField;
              control={form.control}
              name='description';
              render={({
                field
              }: {
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                field: ControllerRenderProps<ProductFormValues, 'description'>;
              }) => (                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Textarea
                      placeholder='Describe your product in detail...'
                      className='min-h-32'
                field: ControllerRenderProps < ProductFormValues, 'description'>;
              }) => (                <FormItem>;
                  <FormLabel > Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder='Describe your product in detail...';
                      className='min - h-32';
<<<<<<< HEAD
                ),;
              }}
            />;
;
            <FormField;
              control={form.control}
              name="description";
              render={({ field } { field:ControllerRenderProps<ProductFormValues "description"> }) => (;
                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Describe your product in detail...";
                      className="min-h-32";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;
<<<<<<< HEAD
=======

            />;

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <FormField
                control={form && form.control}
                name='price'
                </FormItem>)}
            />;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>;
              <FormField;
                control={form.control}
                name='price';
                render={({
                  field
                }: {
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  field: ControllerRenderProps<ProductFormValues, 'price'>;
                }) => (                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Input
                        type='number'
                        min='0'
                        step='0 && 0.01'
                        placeholder='0 && 0.00'
                        {...field}
                      />;
                    </FormControl>;
                    <FormDescription>Set your price in USD</FormDescription>;
<<<<<<< HEAD
                </FormItem>;
              )}
            />;
;
            />;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <FormField;
                control={form.control}
                name="price";
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (;
                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;
                    <FormControl>;
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />;
                    </FormControl>;
                    <FormDescription>;
                      Set your price in USD;
                    </FormDescription>;
              />;
                  field: ControllerRenderProps<ProductFormValues, 'category'>;
                }) => (                  <FormItem>;
<<<<<<< HEAD
                  </FormItem>;
                )}
                    <FormMessage />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <FormMessage />;
                  </FormItem>;
                )}

              />;


              <FormField
                control={form && form.control}
                name='category'
                  field: ControllerRenderProps < ProductFormValues, 'price'>;
                }) => (                  <FormItem>;
                    <FormLabel > Price (USD)</FormLabel>;
                    <FormControl>;
                      <Input;
                        type='number';
                        min='0';
                        step='0.01';
                        placeholder='0.00';
                        {...field}
                      />;
                    </FormControl>;
                    <FormDescription > Set your price in USD</FormDescription>;
                    <FormMessage />;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
                name='category';
                render={({
                  field
                }: {

                  field: ControllerRenderProps<ProductFormValues, 'category'>;
                }) => (                  <FormItem>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </FormItem>;
                )}
              />;
              <FormField;
                control={form.control}
                name="category"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (
                  <FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {...field}
                      >
                        <option value="">Select a category</option>
                        <option value="digital_product">Digital Product</option>
                        <option value="service">Service</option>
                        <option value="ai_tool">AI Tool</option>
                        <option value="course">Course</option>
                        <option value="template">Template</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='tags'
              render={({
                field
              }: {
                field: ControllerRenderProps<ProductFormValues, 'tags'>
              }) => (                <FormItem>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                name="category";
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
                      <select
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                        {...field}>;
                  field: ControllerRenderProps < ProductFormValues, 'category'>;
                }) => (                  <FormItem>;
                    <FormLabel > Category</FormLabel>;
                    <FormControl>;
                      <select;
                        className='flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - base ring - offset - background placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 md:text - sm';
                        {...field}
                      >;
                        <option value=''>Select a category</option>;
                        <option value='digital_product'>Digital Product</option>;
                        <option value='service'>Service</option>;
                        <option value='ai_tool'>AI Tool</option>;
                        <option value='course'>Course</option>;
                        <option value='template'>Template</option>;
                        <option value='other'>Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage />;
<<<<<<< HEAD
              />;
            </div>;
=======

              />;
            </div>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <FormField
              control={form && form.control}
              name='tags'
                  </FormItem>)}
<<<<<<< HEAD
<<<<<<< HEAD
                name="category";
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
                      <select;
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Set your price in USD</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />;
            </div>;
            <FormField;
              control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
                  <FormLabel>Tags</FormLabel>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              name="tags"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (
                <FormItem>


                  <FormLabel>Tags</FormLabel>
                  <FormControl>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Input
                      placeholder='Enter tags separated by commas'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
<<<<<<< HEAD
<<<<<<< HEAD
              name="tags"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {...field} />
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g., ai
                    productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='image'
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='image'
              name='tags';
              render={({
                field
              }: {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                field: ControllerRenderProps<ProductFormValues, 'tags'>;
              }) => (                <FormItem>;
                  <FormLabel>Tags</FormLabel>;
                  <FormControl>;
                    <Input
                      placeholder='Enter tags separated by commas'
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Add relevant tags to help users find your product (e && e.g., ai,;
                    productivity, design);
<<<<<<< HEAD
<<<<<<< HEAD
;
              <FormField;
                control={form.control}
                name="category";
                render={({ field } { field:ControllerRenderProps<ProductFormValues "category"> }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
                      <select;
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
                        {...field}
                      >;
                        <option value="">Select a category</option>;
                        <option value="digital_product">Digital Product</option>;
                        <option value="service">Service</option>;
                        <option value="ai_tool">AI Tool</option>;
                        <option value="course">Course</option>;
                        <option value="template">Template</option>;
                        <option value="other">Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            </div>;
;
            <FormField;
              control={form.control}
              name="tags";
              render={({ field } { field:ControllerRenderProps<ProductFormValues "tags"> }) => (;
                <FormItem>;
              name="tags";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (;
                <FormItem>;
                  <FormLabel>Tags</FormLabel>;
                  <FormControl>;
                    <Input placeholder="Enter tags separated by commas" {...field} />;
                  </FormControl>;
                  <FormDescription>;
                    Add relevant tags to help users find your product (e.g., ai, productivity, design);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
<<<<<<< HEAD
<<<<<<< HEAD
            <FormField;
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
;
            <FormField;
              control={form.control}
              name="image";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            <FormField
              control={form && form.control}
              name='image'
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={() => (;
                <FormItem>;
                  <FormLabel>Product Image</FormLabel>;
                  <FormControl>;
                    <Input
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}
<<<<<<< HEAD
<<<<<<< HEAD
                      className='cursor-pointer'                    />
=======


                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>

              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      className='cursor-pointer'                    />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="cursor-pointer"
                    />


                  </FormControl>
                  <FormDescription>
<<<<<<< HEAD
<<<<<<< HEAD
                    Upload a high-quality image of your product (recommended size: 1200x800px)
                  </FormDescription>
                  <FormMessage />
                  
                  {imagePreview && (
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3/2}>
                        <Image
                          src={imagePreview}
                          alt='Product image preview'                          width={600} // Example width, adjust as needed
                          className="w-full h-full object-cover"
ursor/fix-website-loading-errors-and-merge-6662
                  {imagePreview && (
                    <div className='mt-2 w-full max-w-md border rounded overflow-hidden'>
                      <AspectRatio ratio={3 / 2}>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Upload a high-quality image of your product (recommended
                    size: 1200x800px)
                  </FormDescription>
                  <FormMessage />
<<<<<<< HEAD


                  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  {imagePreview && (
                    <div className='mt-2 w-full max-w-md border rounded overflow-hidden'>
                      <AspectRatio ratio={3 / 2}>
                      className='cursor-pointer'                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high-quality image of your product (recommended;
                    size: 1200x800px);
                  </FormDescription>;
                  <FormMessage />;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {imagePreview && (;
                    <div className='mt-2 w-full max-w-md border rounded overflow-hidden'>;
                      <AspectRatio ratio={3 / 2}>;
                        <Image
                          src={imagePreview}
<<<<<<< HEAD


=======
                          alt='Product image preview'                          width={600} // Example width, adjust as needed
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          alt="Product image preview"
                          width={600} // Example width, adjust as needed


                          height={400} // Example height, adjust as needed
                          className='w-full h-full object-cover'
<<<<<<< HEAD
<<<<<<< HEAD
=======
                          priority={false} // Preview images are not LCP
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          priority={false} // Preview images are not LCP
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          // `sizes` might not be strictly necessary for a preview of this nature
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />;
                      </AspectRatio>;
                    </div>;
                  )}
                </FormItem>;
              )}
            />
<<<<<<< HEAD
            />;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <FormField
              control={form && form.control}
              name='video'              render={() => (;
                <FormItem>;
                  <FormLabel>Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input
                      type='file'
                      accept='video/mp4'
                      onChange={handleVideoChange}
                      className='cursor-pointer'
                field: ControllerRenderProps < ProductFormValues, 'tags'>;
              }) => (                <FormItem>;
                  <FormLabel > Tags</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder='Enter tags separated by commas';
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Add relevant tags to help users find your product (e.g., ai,
                    productivity, design);
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name='image';
              render={() => (
                <FormItem>;
                  <FormLabel > Product Image</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='image/*';
                      on_change={handleImageChange}
                      className='cursor - pointer'                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high - quality image of your product (recommended;
                    size: 1200x800px);
                  </FormDescription>;
                  <FormMessage />;
                  {image_preview && (
                    <div className='mt - 2 w - full max - w-md border rounded overflow - hidden'>;
                      <AspectRatio ratio={3 / 2}>;
                        <Image;
                          src={image_preview}
                          alt='Product image preview'                          width={600} // Example width, adjust as needed;
                          height={400} // Example height, adjust as needed;
                          className='w - full h - full object - cover';
                          priority={false} // Preview images are not LCP;
                          // `sizes` might not be strictly necessary for a preview of this nature,
                          // but can be added if responsive behavior is critical here.;
                          // For local object URLs, optimization via loader won't occur.;
                        />;
                      </AspectRatio>;
                    </div>)}
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name='video'              render={() => (
<<<<<<< HEAD
                          alt='Product image preview'                          width={600} // Example width, adjust as needed
                          alt="Product image preview"
                          width={600} // Example width, adjust as needed
                          height={400} // Example height, adjust as needed
                          className="w-full h-full object-cover"
                          priority={false} // Preview images are not LCP
                          // `sizes` might not be strictly necessary for a preview of this nature
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />
                      </AspectRatio>
                    </div>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='video'              render={() => (
            />;
            <FormField;
              control={form.control}
              name="video"
              render={() => (
                <FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='model'              render={() => (
            />;
            <FormField;
              control={form.control}
              name="model"
              render={() => (
                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <FormItem>;
                  <FormLabel > Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='video / mp4';
                      on_change={handleVideoChange}
                      className='cursor - pointer';
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Optional video demonstrating your product;
                  </FormDescription>;
                  <FormMessage />;
<<<<<<< HEAD
            />;
=======

            />;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <FormField
              control={form && form.control}
              name='model'              render={() => (;
                <FormItem>;
                  <FormLabel>3D Model (glb)</FormLabel>;
                  <FormControl>;
                    <Input
                      type='file'
                      accept='model/gltf-binary,.glb'
                      onChange={handleModelChange}
                      className='cursor-pointer'
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name='model'              render={() => (
                <FormItem>;
                  <FormLabel > 3D Model (glb)</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='model / gltf - binary, .glb';
                      on_change={handleModelChange}
                      className='cursor - pointer';
                    />;
<<<<<<< HEAD
                    <Input ;
                      type="file" ;
                      accept="image/*" ;
                      onChange={handleImageChange}
                      className="cursor-pointer";
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high-quality image of your product (recommended size:1200x800px);
                  </FormDescription>;
                  <FormMessage />;
                  ;
                  {imagePreview && (;
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">;
                      <AspectRatio ratio={3/2}>;
                        <Image;
                          src={imagePreview}
                          alt="Product image preview";
                          width={600} // Example width, adjust as needed;
                          height={400} // Example height, adjust as needed;
                          className="w-full h-full object-cover";
                          priority={false} // Preview images are not LCP;
                          // `sizes` might not be strictly necessary for a preview of this nature,;
                          // but can be added if responsive behavior is critical here.;
                          // For local object URLs, optimization via loader won't occur.;
                        />;
                      </AspectRatio>;
                    </div>;                  )}
                </FormItem>;
              )}
            />;
;
            <FormField;
              control={form.control}
              name="video";
              render={() => (;
                <FormItem>;
                  <FormLabel>Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer" />;
                  </FormControl>;
                  <FormDescription>;
                    Optional video demonstrating your product;
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
;
            <FormField;
              control={form.control}
              name="model";
              render={() => (;
                <FormItem>;
                  <FormLabel>3D Model (glb)</FormLabel>;
                  <FormControl>;
                    <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange} className="cursor-pointer" />;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </FormControl>;
                  <FormDescription>;
                    Upload a 3D model for interactive viewing;
                  </FormDescription>;
                  <FormMessage />;

<<<<<<< HEAD
            <div className='flex justify-end'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'              >
                {isSubmitting ? 'Publishing...' : 'Publish Product'}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            />;

            <div className='flex justify-end'>;

              <Button
                type='submit'
                disabled={isSubmitting}
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
                {isSubmitting ? 'Publishing...' : 'Publish Product'}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
            <FormField;
              control={form.control}
              name="video"
              render={() => (


                <FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
<<<<<<< HEAD

=======
            />
            <FormField
              control={form.control}
              name='model'              render={() => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
            <FormField;
              control={form.control}
              name="model"
              render={() => (

                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
<<<<<<< HEAD
<<<<<<< HEAD

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                {isSubmitting ? "Publishing..." : "Publish Product"}
ursor/fix-website-loading-errors-and-merge-6662
              </Button>



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
}
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <TabsContent value='ai'>
        <AIListingGenerator
          onApplyGenerated={handleApplyGenerated}          initialValues={{
            title: form.getValues('title')
            category: form.getValues('category')

          }}
<<<<<<< HEAD
        />
      </TabsContent>
    </Tabs>
  )
  const file = e.target.files?.[0]
if (file) {
  reader.onloadend = () => {
  setImagePreview (reader.result as string)
}
reader.readAsDataURL (file)
}
}
const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]
if (file) {
}
//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {
  if (!user) {
  toast ({
  return;
}setIsSubmitting (true)
author: {"
  name: user.displayName |"Anonymous Creator"
id: user.id
}
createdAt: new Date () .toISOString ()
}
data: productRecord, error: productError '
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ()
let imagePublicUrl: string | undefined;'
//If we have an image, upload it .from ('products') .upload (imagePath, values.image)
//Get the public window.URL for the image const {
  data: publicUrlData '
}= supabase.storage.from ('products') .getPublicUrl (imagePath)
imagePublicUrl = publicUrlData.publicUrl
//Update the product with the image window.URL const {
  error: updateError '
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values.video)
const {
  data: publicUrlData '
}= supabase.storage.from ('products') .getPublicUrl (videoPath)
const {
  error: updateError '
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values.model)
const {
  data: publicUrlData '
}= supabase.storage.from ('products') .getPublicUrl (modelPath)
const {
  error: updateError '
}= await supabase .from ('product listings')
}//Send listing to moderation service try {'
  await supabase.functions.invoke ('moderate-listing', {
  body: {
  //Redirect to product page router.push (`/marketplace/listing/$ {
  productRecord.id
}`)
}catch (error) {
  toast ({
}finally {
  setIsSubmitting (false)
}
}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList>
}"
}/> <FormField Describe your product in detail..." className="min-h-32" {
  ...field '
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) "
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {
  ...field
}/> "
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) "
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {
  ...field
}/> "
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" onChange= {
  handleImageChange "
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;'
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>)
}</FormItem>) "
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type="file" accept="video/mp4" onChange= {
  handleVideoChange "
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>)
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) "
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>)
}'"  )
}
      
      <TabsContent value="ai">
        <AIListingGenerator 
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues("title"),
            category: form.getValues("category")
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </FormItem>)}
            />;
            <div className='flex justify - end'>;
              <Button;
                type='submit';
                disabled={is_submitting}
                className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'              >;
                {is_submitting ? 'Publishing...' : 'Publish Product'}
                </FormItem>;
              )}
            />;
;
            <div className="flex justify-end">;
              <Button ;
                type="submit" ;
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
              >;
                {isSubmitting ? "Publishing..." :"Publish Product"}
=======
        />;
      </TabsContent>;
    </Tabs>);
  const file = e.target.files?.[0];
// Check condition
if ( {) {
  $2
}
  reader.onloadend = () => {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;
<<<<<<< HEAD
      ;
      <TabsContent value="ai">;
        <AIListingGenerator ;
          onApplyGenerated={handleApplyGenerated}
          initialValues={{;
            title:form.getValues("title"),;
            category:form.getValues("category");
=======

      <TabsContent value='ai'>;
        <AIListingGenerator
          onApplyGenerated={handleApplyGenerated}          initialValues={{
            title: form && form.getValues('title'),
            category: form && form.getValues('category'),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
        />;
      </TabsContent>;
    </Tabs>;
<<<<<<< HEAD
=======
  );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const file = e && e.target.files?.[0];
if (file) {;
  reader && reader.onloadend = () => {;
  setImagePreview (reader && reader.result as string) ;
};
reader && reader.readAsDataURL (file) ;
<<<<<<< HEAD
};
=======

};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
  const file = e && e.target.files?.[0];
if (file) {;
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {;
  if (!user) {;
  toast ({;
  return;
}setIsSubmitting (true);
author: {";
  name: user && user.displayName || "Anonymous Creator";
id: user && user.id ;
};
createdAt: new Date () .toISOString () ;
};
data: productRecord, error: productError ';
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (imagePath, values && values.image);
//Get the public window && window.URL for the image const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (imagePath);
imagePublicUrl = publicUrlData && publicUrlData.publicUrl;
//Update the product with the image window && window.URL const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values && values.video);
const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (videoPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values && values.model);
const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (modelPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') ;
}//Send listing to moderation service try {';
  await supabase && supabase.functions.invoke ('moderate-listing', {;
  body: {;
  //Redirect to product page router && router.push (`/marketplace/listing/$ {;
  productRecord && productRecord.id ;
}`) ;
}catch (error) {;
  toast ({;
<<<<<<< HEAD
}finally {;
  setIsSubmitting (false) ;
};
=======

}finally {;
  setIsSubmitting (false) ;

};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList> ;
}";
}/> <FormFieldDescribe your product in detail..." className="min-h-32" {
  ...field '
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Inputtype="number" min="0" step="0 && 0.01" placeholder="0 && 0.00" {
  ...field 
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Inputplaceholder="Enter tags separated by commas" {
  ...field 
}/> ";
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Inputtype="file" accept="image/*" onChange= {
  handleImageChange "
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;
}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Inputtype="file" accept="video/mp4" onChange= {
  handleVideoChange "
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}'"  );
<<<<<<< HEAD
}
=======

}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
reader.readAsDataURL (file)
  setImagePreview (reader.result as string);
}
reader.readAsDataURL (file);
<<<<<<< HEAD
  ),;}
 import {;
  {;
  Image from 'next/image';
//Import next/image import {;
  Sparkles ';
}from 'lucide-react' //Define the form schema with zod const productSchema = z.object ({;
  title: z.string () .min (3, "Title must be at least 3 characters");";
description: z.string () .min (10,  "Description must be at least 10 characters");
price: z .string () .refine ( (val) => !isNaN (parseFloat (val) ) && parseFloat (val) >= 0, {";
  message: "Price must be a valid number" ;
});";
category: z.string () .min (1, "Please select a category");';
video: typeof window === 'undefined' ? z.any () .optional () : z.instanceof (File) .optional ();';
model: typeof window === 'undefined' ? z.any () .optional () : z.instanceof (File) .optional ();
tags: z.string () .optional () ;
});
//Type for our form values type ProductFormValues = z.infer<typeof productSchema>;
const [isSubmitting, setIsSubmitting] = React.useState (false);
const [imagePreview, setImagePreview] = React.useState (null as string | null);";
const [activeTab, setActiveTab] = React.useState ("manual");
  const file = e.target.files?.[0];
if (file) {;
  reader.onloadend = () => {;
  setImagePreview (reader.result as string) ;
};
reader.readAsDataURL (file) ;
}
};
}
};
const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
  const file = e.target.files?.[0];
if (file) {;
  ;
}
=======

}
}
const handleModelChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
  const file = e.target.files?.[0];
// Check condition
if ( {) {
  $2
}
}
//Apply AI - generated content to the form const handleApplyGenerated = (content: any) =>: any {
  // Check condition
if ( {) {
  $2
}
  toast ({

  return;
}setIsSubmitting (true);
author: {";
  name: user.display_name || "Anonymous Creator";
id: user.id;
}
created_at: new Date () .toISOString ();

}
data: product_record, error: product_error ';
}= await supabase .from ('product listings') .insert ([product_data]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (image_path, values.image);
//Get the public window.URL for the image const {
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (image_path);
imagePublicUrl = publicUrlData.public_url;
//Update the product with the image window.URL const {
  error: update_error ';
}= await supabase .from ('product listings') .from ('products') .upload (video_path, values.video);
const {
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (video_path);
const {
  error: update_error ';
}= await supabase .from ('product listings') .from ('products') .upload (model_path, values.model);
const {
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (model_path);
const {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  error: update_error ';
}= await supabase .from ('product listings');
}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate - listing', {
  body: {
  //Redirect to product page router.push (`/marketplace / listing/$ {
  product_record.id;
}`);
}catch (error) {
  toast ({
}finally {
  setIsSubmitting (false);


      
      <TabsContent value="ai">
        <AIListingGenerator 
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues("title"),
            category: form.getValues("category")
          }}
        />;
      </TabsContent>;
    </Tabs>;
  );


}
}className="w - full"> <TabsList className="grid grid - cols - 2 mb - 6" > <TabsTrigger value="manual" className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple" > ai"className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple"> <Sparkles className="h - 4 w - 4 mr - 2"/> AI - Powered Creation </TabsTrigger> </TabsList>;
}";
}/> <FormField Describe your product in detail..." className="min - h-32" {
  ...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6" > <FormField <FormItem> <FormLabel > Price (USD) </FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {
  ...field;
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel > Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {
  ...field;
}/> ";
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" on_change= {
  handleImageChange ";
}className="cursor - pointer" /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>);
}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel > Product Video (MP4) </FormLabel> <FormControl> <Input type="file" accept="video / mp4" on_change= {
  handleVideoChange ";
}className="cursor - pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>);
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify - end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>);
}'"  );
<<<<<<< HEAD
<<<<<<< HEAD
};
//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {;
  if (!user) {;
  toast ({;
  return;
}setIsSubmitting (true);
author: {";
  name: user.displayName || "Anonymous Creator";
id: user.id ;
};
createdAt: new Date () .toISOString () ;
};
data: productRecord, error: productError ';
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (imagePath, values.image);
//Get the public window.URL for the image const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (imagePath);
imagePublicUrl = publicUrlData.publicUrl;
//Update the product with the image window.URL const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values.video);
const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (videoPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values.model);
const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (modelPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') ;
}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate-listing', {;
  body: {;
  //Redirect to product page router.push (`/marketplace/listing/$ {;
  productRecord.id ;
}`) ;
}catch (error) {;
  toast ({;
  ;
}finally {;
  setIsSubmitting (false) ;
}
};
return (<Tabs value= {;
  activeTab ;
}onValueChange= {;
  setActiveTab ";
}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList> ;
}";
}/> <FormField Describe your product in detail..." className="min-h-32" {;
  ...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {;
  ...field ;
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {;
  ...field ;
}/> ";
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" onChange= {;
  handleImageChange ";
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;
}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type="file" accept="video/mp4" onChange= {;
  handleVideoChange ";
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}'"
  );
}
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
