import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

// Simple form components to avoid import issues
const Form = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
};

const FormField = ({ children }) => {
    return <>{children}</>;
};

const FormItem = ({ children }) => {
    return <div className="mb-4">{children}</div>;
};

const FormLabel = ({ children }) => {
    return <label className="block text-sm font-medium text-gray-700 mb-2">{children}</label>;
};

const FormControl = ({ children }) => {
    return <>{children}</>;
};

const FormDescription = ({ children }) => {
    return <p className="text-sm text-gray-500 mt-1">{children}</p>;
};

const FormMessage = ({ children }) => {
    return <p className="text-sm text-red-600 mt-1">{children}</p>;
};

const Input = ({ placeholder, className = '', value, onChange, type = 'text' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            value={value}
            onChange={onChange}
        />
    );
};

const Button = ({ children, type = 'button', onClick, disabled = false, className = '' }) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const classes = `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 px-4 py-2 text-sm ${className}`;
    
    return (
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

const Textarea = ({ placeholder, className = '', value, onChange, rows = 4 }) => {
    return (
        <textarea
            placeholder={placeholder}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${className}`}
            value={value}
            onChange={onChange}
            rows={rows}
        />
    );
};

const Tabs = ({ children, value, onValueChange }) => {
    return <>{children}</>;
};

const TabsList = ({ children, className = '' }) => {
    return (
        <div className={`flex space-x-1 rounded-lg bg-gray-100 p-1 ${className}`}>
            {children}
        </div>
    );
};

const TabsTrigger = ({ children, value, className = '' }) => {
    return (
        <button
            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        >
            {children}
        </button>
    );
};

const TabsContent = ({ children, value }) => {
    return <>{children}</>;
};
export function ProductSubmissionForm() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [imagePreview, setImagePreview] = React.useState(null);
    const [activeTab, setActiveTab] = React.useState("manual");
    const [formData, setFormData] = React.useState({
        title: "",
        description: "",
        price: "",
        category: "",
        tags: "",
    });
    // Handle form data changes
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Handle image upload preview
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Create the product listing
            const productData = {
                title: formData.title,
                description: formData.description,
                price: parseFloat(formData.price),
                category: formData.category,
                currency: "USD", // Default currency
                tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
                author: {
                    name: "Anonymous Creator",
                    id: "user123",
                },
                createdAt: new Date().toISOString(),
            };
            const { data: productRecord, error: productError } = await supabase
                .from('product_listings')
                .insert([productData])
                .select('id')
                .single();
            if (productError) {
                throw new Error(productError.message);
            }
            // If we have an image, upload it
            if (values.image) {
                const imagePath = `product_images/${productRecord.id}/${values.image.name}`;
                const { error: uploadError } = await supabase.storage
                    .from('products')
                    .upload(imagePath, values.image);
                if (uploadError) {
                    throw new Error(uploadError.message);
                }
                // Get the public URL for the image
                const { data: publicUrlData } = supabase.storage
                    .from('products')
                    .getPublicUrl(imagePath);
                // Update the product with the image URL
                const { error: updateError } = await supabase
                    .from('product_listings')
                    .update({
                    images: [publicUrlData.publicUrl]
                })
                    .eq('id', productRecord.id);
                if (updateError) {
                    throw new Error(updateError.message);
                }
            }
            // Upload video if provided
            if (values.video) {
                const videoPath = `product_videos/${productRecord.id}/${values.video.name}`;
                const { error: uploadError } = await supabase.storage
                    .from('products')
                    .upload(videoPath, values.video);
                if (uploadError) {
                    throw new Error(uploadError.message);
                }
                const { data: publicUrlData } = supabase.storage
                    .from('products')
                    .getPublicUrl(videoPath);
                const { error: updateError } = await supabase
                    .from('product_listings')
                    .update({ video_url: publicUrlData.publicUrl })
                    .eq('id', productRecord.id);
                if (updateError) {
                    throw new Error(updateError.message);
                }
            }
            // Upload model if provided
            if (values.model) {
                const modelPath = `product_models/${productRecord.id}/${values.model.name}`;
                const { error: uploadError } = await supabase.storage
                    .from('products')
                    .upload(modelPath, values.model);
                if (uploadError) {
                    throw new Error(uploadError.message);
                }
                const { data: publicUrlData } = supabase.storage
                    .from('products')
                    .getPublicUrl(modelPath);
                const { error: updateError } = await supabase
                    .from('product_listings')
                    .update({ model_url: publicUrlData.publicUrl })
                    .eq('id', productRecord.id);
                if (updateError) {
                    throw new Error(updateError.message);
                }
            }
            // Show success message
            toast({
                title: "Product Published!",
                description: "Your product has been successfully published on Zion.",
            });
            // Redirect to product page
            navigate(`/marketplace/listing/${productRecord.id}`);
        }
        catch (error) {
            toast({
                title: "Publication Failed",
                description: error instanceof Error ? error.message : "An unknown error occurred",
                variant: "destructive",
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2"/>
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="manual">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="title" render={({ field }) => (<FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product title" {...field}/>
                  </FormControl>
                  <FormDescription>
                    Create a compelling title that describes your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>)}/>

            <FormField control={form.control} name="description" render={({ field }) => (<FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your product in detail..." className="min-h-32" {...field}/>
                  </FormControl>
                  <FormDescription>
                    Provide a detailed description of what you're offering
                  </FormDescription>
                  <FormMessage />
                </FormItem>)}/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="price" render={({ field }) => (<FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field}/>
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage />
                  </FormItem>)}/>

              <FormField control={form.control} name="category" render={({ field }) => (<FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" {...field}>
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
                  </FormItem>)}/>
            </div>

            <FormField control={form.control} name="tags" render={({ field }) => (<FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {...field}/>
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>)}/>

            <FormField control={form.control} name="image" render={() => (<FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" onChange={handleImageChange} className="cursor-pointer"/>
                  </FormControl>
                  <FormDescription>
                    Upload a high-quality image of your product (recommended size: 1200x800px)
                  </FormDescription>
                  <FormMessage />
                  
                  {imagePreview && (<div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3 / 2}>
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover"/>
                      </AspectRatio>
                    </div>)}
                </FormItem>)}/>

            <FormField control={form.control} name="video" render={() => (<FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer"/>
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>)}/>

            <FormField control={form.control} name="model" render={() => (<FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange} className="cursor-pointer"/>
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing
                  </FormDescription>
                  <FormMessage />
                </FormItem>)}/>

            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                {isSubmitting ? "Publishing..." : "Publish Product"}
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="ai">
        <AIListingGenerator onApplyGenerated={handleApplyGenerated} initialValues={{
            title: form.getValues("title"),
            category: form.getValues("category")
        }}/>
      </TabsContent>
    </Tabs>);
}
