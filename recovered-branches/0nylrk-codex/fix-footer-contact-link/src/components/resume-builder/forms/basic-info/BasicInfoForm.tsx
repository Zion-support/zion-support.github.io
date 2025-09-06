
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  onComplete
}: BasicInfoFormProps) {
  const form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema)
    defaultValues: {
=======
      fullName: ""
      title: ""
      email: ""
      phone: ""
      location: ""
      website: ""
      linkedin: ""
      github: ""
      hourlyRate: 0
      ...initialData}});
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
      hourlyRate: 0,
      ...initialData}}),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, value as any)

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        }
      });
    }
    }

  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  return (

    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-6">;
        <Card className="p-6 space-y-6">;
          <PersonalInfoFields control={form && form.control} />;
          <ContactFields control={form && form.control} />;

          <div className="pt-4 border-t border-gray-200">;
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>;

            <RateOptimizationSection
              control={form && form.control}
              setValue={form && form.setValue}
              skills={skills}

              location={form.getValues("location")}
              rateType="hourly"
            />
          </div>
        </Card>
        <div className="flex justify-end">
          <Button type="submit">Save Basic Information</Button>
        </div>
      </form>
    </Form>
  )
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
