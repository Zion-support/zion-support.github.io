export type Json =;
  | string;
  | number;
  | boolean;
  | null;
  | { [key: string]: Json | undefined }
  | Json[];          api_key_id: string | null;
          created_at: string;
          endpoint: string;
          id: string;
          ip_address: string | null;
          method: string;
          response_time_ms: number | null;
          status_code: number;
          user_agent: string | null;
          user_id: string | null;
        }
        Insert: {        Insert: {
          api_key_id?: string | null;
          created_at?: string;
          endpoint: string;
          id?: string;
          ip_address?: string | null;
          method: string;
          response_time_ms?: number | null;
          status_code: number;
          user_agent?: string | null;
          user_id?: string | null;
        }            foreignKeyName: "api_logs_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "api_keys"            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "talent_resumes"
            referencedColumns: ["id"]
            columns: ["job_id"];
            isOneToOne: false;
            referenced_relation: "jobs";
            referenced_columns: ["id"];
          }          },

            columns: ["resume_id"];
            isOneToOne: false;"
            referenced_relation: "talent_resumes";"
            referenced_columns: ["id"];
          }
          {"
            foreignKeyName: "job_applications_talent_id_fkey";"
            columns: ["talent_id"];
            isOneToOne: false;"
            referenced_relation: "user_metrics";"
            referenced_columns: ["user_id"];
          {"
            foreignKeyName: "job_applications_talent_id_fkey";","
  columns: ["talent_id"];"
            isOneToOne: false;,"
  referenced_relation: "user_metrics";""
            referenced_columns: ["user_id"];"
          }];
      }
      jobs: {
        Row: {
          budget: Json;
          category: string;
          client_id: string;
          created_at: string;
          deadline: string | null,
  description: string;
          id: string;
          skills: string[];
          status: string;
          title: string;
          updated_at: string;

        }
        Insert: {}
          budget?: Json;
          category: string;
          client_id: string;
          category: string;,
  client_id: string;
          created_at?: string;
          deadline?: string | null,
  description: string;
          id?: string;
          skills?: string[];
          status?: string;
          title: string;}
          updated_at?: string;}
        }
        Update: {}
          budget?: Json;
          category?: string;
          client_id?: string;
          created_at?: string;
          deadline?: string | null;
          description?: string;
          id?: string;
          skills?: string[];
          status?: string;
          title?: string;}
          updated_at?: string;}
        }
        Relationships: [;
          {"
            foreignKeyName: "jobs_client_id_fkey";"
            columns: ["client_id"];
            isOneToOne: false;"
            referenced_relation: "user_metrics";"
            referenced_columns: ["user_id"];
          }];
      }
      milestone_activities: {}
        Row: {}
          action: string;
          comment: string | null;
          created_at: string;
          id: string;
          milestone_id: string;
          new_status: string;
          previous_status: string | null;
          user_id: string;
        }
        Insert: {}
          action: string;
          comment?: string | null;
          created_at?: string;
          id?: string;
          milestone_id: string;
          new_status: string;

          {"
            foreignKeyName: "jobs_client_id_fkey";",]"
  columns: ["client_id"];"
            isOneToOne: false;,"
  referenced_relation: "user_metrics";""
            referenced_columns: ["user_id"];"
          }];
      }
      milestone_activities: {,
  Row: {
          action: string;,
  comment: string | null;
          created_at: string;,
  id: string;
          milestone_id: string;,
  new_status: string;
          previous_status: string | null;,
  user_id: string;

        }
        Insert: {,
  action: string;
          comment?: string | null;
          created_at?: string;
          id?: string;

          milestone_id: string;,
  new_status: string;
          previous_status?: string | null;
          user_id: string;

        }
        Update: {}
          action?: string;
          comment?: string | null;
          created_at?: string;
          id?: string;
          milestone_id?: string;
          new_status?: string;
          previous_status?: string | null;}
          user_id?: string;}
        }
        Relationships: [;

          {
            foreignKeyName: "milestone_activities_milestone_id_fkey";
            columns: ["milestone_id"];
            isOneToOne: false;
            referenced_relation: "project_milestones";
            referenced_columns: ["id"];

          }          }

          },

          },
          {
            foreignKeyName: "project_milestones_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referenced_relation: "projects";
            referenced_columns: ["id"];
          {
            foreignKeyName: "project_notes_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referenced_relation: "projects";
            referenced_columns: ["id"];

          }          }

          },

            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]          }
          {
            foreignKeyName: "profiles_tenant_id_fkey";

            columns: ["tenant_id"];
            isOneToOne: false;"
            referenced_relation: "whitelabel_tenants";"
            referenced_columns: ["id"];
          }];
      }
      project_milestones: {}
        Row: {}
          amount: number;
          created_at: string;
          created_by: string;
          deliverables: Json | null;
          description: string | null;
          due_date: string | null;
          id: string;
          project_id: string;
          status: string;
          title: string;
          updated_at: string;
        }
        Insert: {}
          amount: number;
          created_at?: string;
          created_by: string;
          deliverables?: Json | null;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          project_id: string;
          status?: string;
          title: string;
          updated_at?: string;
        }
        Update: {}
          amount?: number;
          created_at?: string;
          created_by?: string;
          deliverables?: Json | null;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          project_id?: string;
          status?: string;
          title?: string;
          updated_at?: string;
        }
        Relationships: [;

            foreignKeyName: "project_milestones_created_by_fkey";

            columns: ["created_by"];
            isOneToOne: false;"
            referenced_relation: "user_metrics";"
            referenced_columns: ["user_id"];

          }

          },

          }

          },

          {
            foreignKeyName: "project_milestones_project_id_fkey";

            columns: ["project_id"];
            isOneToOne: false;"
            referenced_relation: "projects";"
            referenced_columns: ["id"];

            foreignKeyName: "project_notes_project_id_fkey";

            columns: ["project_id"];
            isOneToOne: false;"
            referenced_relation: "projects";"
            referenced_columns: ["id"];

          }

          },

          {
            foreignKeyName: "project_notes_user_id_fkey";

            columns: ["user_id"];
            isOneToOne: false;"
            referenced_relation: "user_metrics";"
            referenced_columns: ["user_id"];
          }];
      }
      projects: {}
        Row: {}
          agreement_url: string | null;
          client_id: string;
          created_at: string;
          id: string;
          job_id: string;
          payment_terms: string;
          scope_summary: string;
          start_date: string;
          status: string;
          talent_id: string;
          updated_at: string;
        }
        Insert: {}
          agreement_url?: string | null;
          client_id: string;
          created_at?: string;
          id?: string;
          job_id: string;
          payment_terms: string;
          scope_summary: string;
          start_date: string;
          status?: string;
          talent_id: string;
          updated_at?: string;
        }
        Update: {}
          agreement_url?: string | null;
          client_id?: string;
          created_at?: string;
          id?: string;
          job_id?: string;
          payment_terms?: string;
          scope_summary?: string;
          start_date?: string;
          status?: string;
          talent_id?: string;
          updated_at?: string;
        }
        Relationships: [;

          },

          {
            foreignKeyName: "projects_job_id_fkey"

            columns: ["job_id"]
            isOneToOne: false"
            referencedRelation: "jobs""
            referencedColumns: ["id"]

            foreignKeyName: "projects_client_id_fkey";
            columns: ["client_id"];

            isOneToOne: false;
            referenced_relation: "user_metrics";

            referenced_columns: ["user_id"];

          }

          }
          {"
            foreignKeyName: "projects_talent_id_fkey";"
            columns: ["talent_id"];
            isOneToOne: false;"
            referenced_relation: "user_metrics";"
            referenced_columns: ["user_id"];
          }];
      }
      quote_requests: {}
        Row: {}
          budget_display: string | null;
          budget_max: number | null;
          budget_min: number | null;
          created_at: string;
          id: string;
          is_archived: boolean;
          project_description: string | null;
          project_name: string;
          project_summary: string;
          replied_at: string | null;
          requester_email: string;
          requester_id: string | null;
          requester_name: string;
          start_date: string | null;"
          status: Database["public"]["Enums"]["quote_request_status"];
          talent_id: string | null;
          timeline: string;
          updated_at: string;

          viewed_at: string | null;

        }
        Insert: {}
          budget_display?: string | null;
          budget_max?: number | null;
          budget_min?: number | null;
          created_at?: string;
          id?: string;
          is_archived?: boolean;
          project_description?: string | null;
          project_name: string;
          project_summary: string;
          project_name: string;,
  project_summary: string;
          replied_at?: string | null;
          requester_email: string;
          requester_id?: string | null;
          requester_name: string;
          start_date?: string | null;"
          status?: Database["public"]["Enums"]["quote_request_status"];

          start_date?: string | null;"
          status?: Database["public"]["Enums"]["quote_request_status"];"

          talent_id?: string | null;
          timeline: string;
          updated_at?: string;}
          viewed_at?: string | null;}
        }

          },
          {
            foreignKeyName: "projects_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]
          }]
      }
      quote_requests: {
        Row: {
          budget_display: string | null
          budget_max: number | null
          budget_min: number | null
          created_at: string
          id: string
          is_archived: boolean
          project_description: string | null
          project_name: string
          project_summary: string
          replied_at: string | null
          requester_email: string
          requester_id: string | null
          requester_name: string
          start_date: string | null
          status: Database["public"]["Enums"]["quote_request_status"]
          talent_id: string | null
          timeline: string
          updated_at: string
          viewed_at: string | null
        }
        Insert: {
          budget_display?: string | null
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          id?: string
          is_archived?: boolean
          project_description?: string | null
          project_name: string
          project_summary: string
          replied_at?: string | null
          requester_email: string
          requester_id?: string | null
          requester_name: string
          start_date?: string | null
          status?: Database["public"]["Enums"]["quote_request_status"]
          talent_id?: string | null
          timeline: string
          updated_at?: string
          viewed_at?: string | null
        }
        Update: {
          budget_display?: string | null;
          budget_max?: number | null;
          budget_min?: number | null;
          created_at?: string;
          id?: string;
          updated_at?: string;
          user_id: string;
        }
          {
            foreignKeyName: "referral_rewards_referral_id_fkey";
            columns: ["referral_id"];
            isOneToOne: false;
            referenced_relation: "referrals";
            referenced_columns: ["id"];
          }
          {
            foreignKeyName: "referral_rewards_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      referrals: {
        Row: {
          completed_at: string | null;
          created_at: string;
          email: string | null;
          id: string;
          ip_address: string | null;
          partner_id: string | null;
          referral_code: string;
          referred_id: string | null;
          referred_user_type: string | null;
          referrer_id: string;
          referrer_user_type: string | null;
          reward_issued: boolean;
          reward_issued_at: string | null;
          status: Database["public"]["Enums"]["referral_status"];
        }
        Insert: {
          completed_at?: string | null;
          created_at?: string;
          email?: string | null;
          id?: string;
          ip_address?: string | null;
          partner_id?: string | null;
          referral_code: string;
          referred_id?: string | null;
          referred_user_type?: string | null;
          referrer_id: string;
          referrer_user_type?: string | null;
          reward_issued?: boolean;
          reward_issued_at?: string | null;
          status?: Database["public"]["Enums"]["referral_status"];
        }
        Update: {
          completed_at?: string | null;
          created_at?: string;
          email?: string | null;
          id?: string;
          ip_address?: string | null;
          partner_id?: string | null;
          referral_code?: string;
          referred_id?: string | null;
          referred_user_type?: string | null;
          referrer_id?: string;
          referrer_user_type?: string | null;
          reward_issued?: boolean;
          reward_issued_at?: string | null;
          status?: Database["public"]["Enums"]["referral_status"];
        }
        Relationships: [;
          {
            foreignKeyName: "quote_requests_requester_id_fkey";
            columns: ["requester_id"];
            isOneToOne: false;
            referenced_relation: "profiles";
            referenced_columns: ["id"];
          {
            foreignKeyName: "quote_requests_talent_id_fkey";
            columns: ["talent_id"];
            isOneToOne: false;
            referenced_relation: "profiles";
            referenced_columns: ["id"];
          }];
      }          code?: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
          user_id?: string;        Relationships: [;
          {
            foreignKeyName: "referral_codes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      referral_rewards: {
        Row: {
          amount: number | null;
          created_at: string;
          expires_at: string | null;
          id: string;
          partner_id: string | null;
          referral_id: string;
          reward_type: string;
          user_id: string;
        }
        Insert: {
          amount?: number | null;
          created_at?: string;
          expires_at?: string | null;
          id?: string;
          partner_id?: string | null;
          referral_id: string;
          reward_type: string;
          user_id: string;
        }
        Update: {
          amount?: number | null;
          created_at?: string;
          expires_at?: string | null;
          id?: string;
          partner_id?: string | null;
          referral_id?: string;
          reward_type?: string;
          user_id?: string;
        }
        Relationships: [;
          {            foreignKeyName: "referral_rewards_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]
            columns: ["referral_code"]
            isOneToOne: false
            referencedRelation: "referral_codes"
            referencedColumns: ["code"]

          },
          }
          {
            foreignKeyName: "referrals_referrer_id_fkey";
            columns: ["referrer_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }          clicked_at: string | null;
          email_body: string;
          email_subject: string;
          id: string;
          opened_at: string | null;
          reminder_type: string;
          sent_at: string | null;
          user_id: string;
        }
        Insert: {        Insert: {
          clicked_at?: string | null;
          email_body: string;
          email_subject: string;
          id?: string;
          opened_at?: string | null;
          reminder_type: string;
          sent_at?: string | null;
          user_id: string;
        }        Relationships: [;
          {
          {
            foreignKeyName: "resume_skills_resume_id_fkey";
            columns: ["resume_id"];
            isOneToOne: false;
            referenced_relation: "talent_resumes";
            referenced_columns: ["id"];
          }];
      }
      review_reports: {
        Row: {
          created_at: string;
          id: string;
          reason: string;
          reporter_id: string;
          resolved_at: string | null;
          review_id: string;
          status: string;
        }
        Insert: {
          created_at?: string;
          id?: string;
          reason: string;
          reporter_id: string;
          resolved_at?: string | null;
          review_id: string;
          status?: string;
        }
        Update: {
          created_at?: string;
          id?: string;
          reason?: string;
          reporter_id?: string;
          resolved_at?: string | null;
          review_id?: string;
          status?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "review_reports_reporter_id_fkey";

            columns: ["reporter_id"];
            isOneToOne: false;"
            referenced_relation: "user_metrics";"
            referenced_columns: ["user_id"];

          }          }

          },

            columns: ["reviewee_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]
          email: string;
          display_name: string;
          user_type: string;
          last_login: string;
          reminder_type: string;
          days_since_login: number;
          onboarding_status: Json;
        }[];

      complete_referral: {
        Args: { _referred_id: string, _user_type: string }
        Returns: undefined;
      }
      flag_suspicious_content: {,
  Args: {
          p_user_id: string;,
  p_user_email: string;
          p_content_type: string;,
  p_content_id: string;
          p_content_excerpt: string;,
  p_severity: string;
          p_reason: string;,
  p_ip_address: string;
        }
        Returns: string;
      }
        Args: Record < PropertyKey, never>;
        Returns: string;      api_key_scope:;
        | "jobs:read";
        | "jobs:write";
        | "talent:read";
        | "quotes:write";
        | "webhooks:manage";
      fraud_severity: "safe" | "suspicious" | "dangerous";      fraud_severity: "safe" | "suspicious" | "dangerous";
      quote_request_status:;
        | "new";
        | "in_review";
        | "accepted";
        | "responded";
        | "closed";
        | "archived";
export type Tables<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]);

          date: string
          event_type: string
          count: number
        }[]
      }
      hash_api_key: {
        Args: { api_key: string }
        Returns: string
      }
      schedule_email_reminders: {
        Args: Record<PropertyKey, never>
  DefaultSchemaTableNameOrOptions extends    | { schema: keyof Database }
  EnumName extends DefaultSchemaEnumNameOrOptions extends {

    schema: keyof Database;
  }"
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"];
    : never = never;
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }    | { schema: keyof Database }
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
  // TODO: Implement
}
    schema: keyof Database;
  }"
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"];"
    : never = never;
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }

    | keyof DefaultSchema["CompositeTypes"]
;
;
export const Constants = {

  public: {,
  Enums: {

      api_key_scope: [
]"
        "archived"],""
      referral_status: ["pending", "completed", "expired"]}}} as const;"
;"
      referral_status:"pending" | "completed" | "expired";"

;        "archived"],
      referral_status: ["pending", "completed", "expired"]}}} as const;
;
      referral_status:"pending" | "completed" | "expired";
    }
    CompositeTypes:{;}
      [_ in never]:never;}
export const Constants = {

export const Constants = {

  public: {,
  Enums: {

      api_key_scope: [
]"
        "archived"],""
      referral_status: ["pending", "completed", "expired"]}}} as const;"
;"
      referral_status:"pending" | "completed" | "expired";"


    }
    CompositeTypes:{;}
      [_ in never]:never;}
    }
  }
}
;
type DefaultSchema = Database[Extract<keyof Database, "public">];
;
export type Tables<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]);
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"]);
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {;
      Row:infer R;
    }
    ? R;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &;
        DefaultSchema["Views"]);
    ? (DefaultSchema["Tables"] &;
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {;



