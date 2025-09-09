#!/bin/bash

echo "Fixing comprehensive TypeScript syntax errors..."

# Fix various patterns that cause syntax errors
find src -name "*.ts" -o -name "*.tsx" | while read -r file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Fix : any()   => -> : () =>
        sed -i '' 's/: any()   =>/: () =>/g' "$file"
        
        # Fix : any()  => -> : () =>
        sed -i '' 's/: any()  =>/: () =>/g' "$file"
        
        # Fix : any() => -> : () =>
        sed -i '' 's/: any() =>/: () =>/g' "$file"
        
        # Fix : any( -> : (
        sed -i '' 's/: any(/: (/g' "$file"
        
        # Fix : anyKeyboardEvent -> : KeyboardEvent
        sed -i '' 's/: anyKeyboardEvent/: KeyboardEvent/g' "$file"
        
        # Fix : anyReact -> : React
        sed -i '' 's/: anyReact/: React/g' "$file"
        
        # Fix : anyReactNode -> : ReactNode
        sed -i '' 's/: anyReactNode/: ReactNode/g' "$file"
        
        # Fix : anyError -> : Error
        sed -i '' 's/: anyError/: Error/g' "$file"
        
        # Fix : anyErrorInfo -> : ErrorInfo
        sed -i '' 's/: anyErrorInfo/: ErrorInfo/g' "$file"
        
        # Fix : anyP -> : P
        sed -i '' 's/: anyP/: P/g' "$file"
        
        # Fix : anyEvent -> : Event
        sed -i '' 's/: anyEvent/: Event/g' "$file"
        
        # Fix : anyErrorEvent -> : ErrorEvent
        sed -i '' 's/: anyErrorEvent/: ErrorEvent/g' "$file"
        
        # Fix : anyPromiseRejectionEvent -> : PromiseRejectionEvent
        sed -i '' 's/: anyPromiseRejectionEvent/: PromiseRejectionEvent/g' "$file"
        
        # Fix : anyComponentType -> : ComponentType
        sed -i '' 's/: anyComponentType/: ComponentType/g' "$file"
        
        # Fix : anySupabaseUser -> : SupabaseUser
        sed -i '' 's/: anySupabaseUser/: SupabaseUser/g' "$file"
        
        # Fix : anyUser -> : User
        sed -i '' 's/: anyUser/: User/g' "$file"
        
        # Fix : anyNotification -> : Notification
        sed -i '' 's/: anyNotification/: Notification/g' "$file"
        
        # Fix : anyNotificationType -> : NotificationType
        sed -i '' 's/: anyNotificationType/: NotificationType/g' "$file"
        
        # Fix : anykeyof -> : keyof
        sed -i '' 's/: anykeyof/: keyof/g' "$file"
        
        # Fix : anystring -> : string
        sed -i '' 's/: anystring/: string/g' "$file"
        
        # Fix : anynumber -> : number
        sed -i '' 's/: anynumber/: number/g' "$file"
        
        # Fix : anyboolean -> : boolean
        sed -i '' 's/: anyboolean/: boolean/g' "$file"
        
        # Fix : any[] -> : any[]
        sed -i '' 's/: any\[\]/: any[]/g' "$file"
        
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
        
        # Fix anyany( -> any(
        sed -i '' 's/anyany(/any(/g' "$file"
        
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
    fi
done

echo "Comprehensive TypeScript syntax errors fixed!"
