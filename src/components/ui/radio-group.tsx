

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {

      {...props}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      ref={ref}
    />;
  );
});

  React.ElementRef<typeof RadioGroupPrimitive.Item>,;

  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}

        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem }
;

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
