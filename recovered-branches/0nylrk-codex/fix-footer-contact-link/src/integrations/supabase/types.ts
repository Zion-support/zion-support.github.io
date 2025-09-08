

      analytics_events: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          metadata: Json | null
          path: string | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          path?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          path?: string | null
          session_id?: string | null
            foreignKeyName: "analytics_events_user_id_fkey"

          {
            foreignKeyName: "api_logs_user_id_fkey";




          }


          {



          }
},

          }










          }


            foreignKeyName: "projects_job_id_fkey";
            columns: ["job_id"];
            isOneToOne: false;
            referenced_relation: "jobs";
            referenced_columns: ["id"];

          }
          {
            foreignKeyName: "projects_talent_id_fkey";
            columns: ["talent_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";


          }

          },






        Update: {


            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]























          {
            foreignKeyName: "tenant_administrators_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];


          user_id: string
        }

        Insert: {
          created_at?: string
          event_types: string[]
          id?: string
          is_active?: boolean
          last_triggered_at?: string | null
          name: string
          secret?: string | null
          updated_at?: string
          url: string

          user_id: string
        }

        Update: {
          created_at?: string
          event_types?: string[]
          id?: string
          is_active?: boolean
          last_triggered_at?: string | null
          name?: string
          secret?: string | null
          updated_at?: string
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "webhook_configs_user_id_fkey"
      whitelabel_tenants: {
        Row: {
          account_manager_id: string | null
          brand_name: string
          created_at: string | null
          custom_domain: string | null
          dns_verified: boolean
          email_template_override: Json | null
          id: string
          is_active: boolean
          landing_page_copy: Json | null
          logo_url: string | null
          primary_color: string
          subdomain: string
          theme_preset: string
          updated_at: string | null
        }
        Insert: {
          account_manager_id?: string | null
          brand_name: string
          created_at?: string | null
          custom_domain?: string | null
          dns_verified?: boolean
          email_template_override?: Json | null
          id?: string
          is_active?: boolean
          landing_page_copy?: Json | null
          logo_url?: string | null
          primary_color?: string
          subdomain: string
          theme_preset?: string
          updated_at?: string | null
        }
        Update: {
          account_manager_id?: string | null
          brand_name?: string
          created_at?: string | null
          custom_domain?: string | null
          dns_verified?: boolean
          email_template_override?: Json | null
          id?: string
          is_active?: boolean
          landing_page_copy?: Json | null
          logo_url?: string | null
          primary_color?: string
          subdomain?: string
          theme_preset?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "whitelabel_tenants_account_manager_id_fkey"
            columns: ["account_manager_id"]
      work_history: {
        Row: {
          company_logo_url: string | null
          company_name: string
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          is_current: boolean
          location: string | null
          resume_id: string
          role_title: string
          start_date: string

          updated_at: string
        }

        Insert: {
          company_logo_url?: string | null
          company_name: string
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean
          location?: string | null
          resume_id: string
          role_title: string
          start_date: string
          updated_at?: string
        }
        Update: {
          company_logo_url?: string | null
          company_name?: string
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean
          location?: string | null
          resume_id?: string
          role_title?: string
          start_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "work_history_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "talent_resumes"
            referencedColumns: ["id"]
          }]




      create_scheduled_reminders: {;
        Args: Record<PropertyKey never>;
        Returns: undefined;


      }
      flag_suspicious_content: {
        Args: {
          p_user_id: string;
          p_user_email: string;
          p_content_type: string;
          p_content_id: string;
          p_content_excerpt: string;
          p_severity: string;
          p_reason: string;
          p_ip_address: string;
        }
        Returns: string;
      }
      generate_api_key: {
        Args: { prefix: string }
        Returns: string;
      }
      generate_fraud_report: {
        Args: { year: number, month: number }
        Returns: string;
      }
      generate_referral_code: {
        Args: { user_id: string }
        Returns: string;
      }
      get_api_key_user_id: {
        Args: { key_prefix: string, provided_key: string }

        Returns: string
      }

      }
      complete_referral: {
        Args: { _referred_id: string, _user_type: string }
        Returns: undefined
      }
      create_notification: {
        Args: {
          _user_id: string
          _title: string
          _message: string
          _type: string
          _related_id?: string
        }
        Returns: string
      }
      create_scheduled_reminders: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      create_scheduled_reminders: {;
        Args: Record<PropertyKey never>;
        Returns: undefined;
      }
      flag_suspicious_content: {
        Args: {
          p_user_id: string
          p_user_email: string
          p_content_type: string
          p_content_id: string
          p_content_excerpt: string
          p_severity: string
          p_reason: string
          p_ip_address: string
        }
        Returns: string
      }
      generate_api_key: {
        Args: { prefix: string }
        Returns: string
      }
      generate_fraud_report: {
        Args: { year: number, month: number }
        Returns: string
      }
      generate_referral_code: {
        Args: { user_id: string }
        Returns: string
      }
      get_api_key_user_id: {
        Args: { key_prefix: string, provided_key: string }
        Returns: string
      }
      get_current_tenant_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      get_current_tenant_id: {;
        Args: Record<PropertyKey never>;
        Returns: string;
      get_current_tenant_id: {;
        Args: Record<PropertyKey never>;
        Returns: string;





      }
      get_event_distribution: {
        Args: { days_back?: number }
        Returns: {

          date: string;
          event_type: string;
          count: number;
        }[];
      }
      hash_api_key: {
        Args: { api_key: string }
        Returns: string;
      }



      schedule_email_reminders: {;
        Args: Record<PropertyKey never>;
        Returns: number;







    Enums: {

        Returns: number
      schedule_email_reminders: {;
        Args: Record<PropertyKey never>;
        Returns: number;
      }
      trigger_resume_scoring: {
        Args: { application_id: string }
        Returns: undefined
      }
      update_onboarding_milestone: {
        Args: { _user_id: string, _milestone: string, _status: boolean }
        Returns: undefined
      }
      verify_api_key: {
        Args: { provided_key: string, stored_hash: string }
        Returns: boolean
      }
    }
    Enums: {
      api_key_scope:
        | "jobs:read"
        | "jobs:write"
        | "talent:read"
        | "quotes:write"
        | "webhooks:manage"
      fraud_severity: "safe" | "suspicious" | "dangerous"
      quote_request_status:
        | "new"
        | "in_review"
        | "accepted"
        | "responded"
        | "closed"
        | "archived"
      referral_status: "pending" | "completed" | "expired"
    }

    CompositeTypes: {
      [_ in never]: never
    }
  }
}


      ? R
      : never
    : never
export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends


      ? R;
      : never;
    : never;

export type TablesInsert<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];

    | keyof DefaultSchema["Tables"];
    | { schema: keyof Database };
    | keyof DefaultSchema["Tables"]




      ? I
      : never
    : never
export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends



  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];

    | keyof DefaultSchema["Tables"];
    | { schema: keyof Database };
    | keyof DefaultSchema["Tables"]




      ? U
      : never
    : never
export type Enums<
  DefaultSchemaEnumNameOrOptions extends


        "jobs:write",
        "talent:read",
        "quotes:write",
        "webhooks:manage"],
      fraud_severity: ["safe", "suspicious", "dangerous"],
      quote_request_status: [

        "new";
        "in_review";
        "accepted";
        "responded";
        "closed";
        "archived"],
      referral_status: ["pending", "completed", "expired"]}}} as const
;

        "new",
        "in_review",
        "accepted",
        "responded",
        "closed",
        "archived"],
      referral_status: ["pending", "completed", "expired"]}}} as const
;
type DefaultSchema = Database[Extract<keyof Database, "public">];
export type Tables<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]);
    | { schema: keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"]);
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {;
      Row: infer R;
    }
    ? R;
    : never;
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &;
        DefaultSchema["Views"]);
    ? (DefaultSchema["Tables"] &;
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {;
        Row: infer R;
      }
      ? R;
      : never;
    : never;
export type TablesInsert<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema: keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Insert: infer I;
    }
    ? I;
    : never;
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Insert: infer I;
      }
      ? I;
      : never;
    : never;
export type TablesUpdate<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema: keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Update: infer U;
    }
    ? U;
    : never;
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Update: infer U;
      }






    | { schema: keyof Database },;
  EnumName extends DefaultSchemaEnumNameOrOptions extends {;
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"];
    : never = never> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }



  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName];
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"];
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions];
    : never;
export type CompositeTypes<;
  PublicCompositeTypeNameOrOptions extends;
    | keyof DefaultSchema["CompositeTypes"];



    | { schema: keyof Database },;
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {;
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"];
    : never = never> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }


  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never


  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName];
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"];
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions];

    : never;





