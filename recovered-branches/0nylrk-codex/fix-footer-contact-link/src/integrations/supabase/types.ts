export type Json =
  | string
  | number
  | boolean
  | null
  | {_[key: string]: Json | undefined}
  | Json[]

export type Database = {_public: {
    Tables: {
      ai_chats: {
        Row: {
          created_at: string
          id: string
          message: string
          response: string
          user_id: string}
        Insert: {_created_at?: string
          id?: string
          message: string
          response: string
          user_id: string}
        Update: {_created_at?: string
          id?: string
          message?: string
          response?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "ai_chats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      analytics_events: {_Row: {
          created_at: string | null
          event_type: string
          id: string
          metadata: Json | null
          path: string | null
          session_id: string | null
          user_id: string | null}
        Insert: {_created_at?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          path?: string | null
          session_id?: string | null
          user_id?: string | null}
        Update: {_created_at?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          path?: string | null
          session_id?: string | null
          user_id?: string | null}
        Relationships: [
          {_foreignKeyName: "analytics_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      api_keys: {_Row: {
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          key_hash: string
          key_prefix: string
          last_used_at: string | null
          name: string
          scopes: Database["public"]["Enums"]["api_key_scope"][]
          user_id: string}
        Insert: {_created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key_hash: string
          key_prefix: string
          last_used_at?: string | null
          name: string
          scopes?: Database["public"]["Enums"]["api_key_scope"][]
          user_id: string}
        Update: {_created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key_hash?: string
          key_prefix?: string
          last_used_at?: string | null
          name?: string
          scopes?: Database["public"]["Enums"]["api_key_scope"][]
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      api_logs: {_Row: {
          api_key_id: string | null
          created_at: string
          endpoint: string
          id: string
          ip_address: string | null
          method: string
          response_time_ms: number | null
          status_code: number
          user_agent: string | null
          user_id: string | null}
        Insert: {_api_key_id?: string | null
          created_at?: string
          endpoint: string
          id?: string
          ip_address?: string | null
          method: string
          response_time_ms?: number | null
          status_code: number
          user_agent?: string | null
          user_id?: string | null}
        Update: {_api_key_id?: string | null
          created_at?: string
          endpoint?: string
          id?: string
          ip_address?: string | null
          method?: string
          response_time_ms?: number | null
          status_code?: number
          user_agent?: string | null
          user_id?: string | null}
        Relationships: [
          {_foreignKeyName: "api_logs_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["id"]},
          {_foreignKeyName: "api_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      certifications: {_Row: {
          created_at: string
          credential_id: string | null
          credential_url: string | null
          expiration_date: string | null
          id: string
          issue_date: string | null
          issuing_organization: string
          name: string
          resume_id: string}
        Insert: {_created_at?: string
          credential_id?: string | null
          credential_url?: string | null
          expiration_date?: string | null
          id?: string
          issue_date?: string | null
          issuing_organization: string
          name: string
          resume_id: string}
        Update: {_created_at?: string
          credential_id?: string | null
          credential_url?: string | null
          expiration_date?: string | null
          id?: string
          issue_date?: string | null
          issuing_organization?: string
          name?: string
          resume_id?: string}
        Relationships: [
          {_foreignKeyName: "certifications_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "talent_resumes"
            referencedColumns: ["id"]}]
      }
      content: {_Row: {
          content_type: string
          content_url: string | null
          created_at: string
          creator_id: string
          description: string | null
          id: string
          published: boolean | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          views: number | null}
        Insert: {_content_type: string
          content_url?: string | null
          created_at?: string
          creator_id: string
          description?: string | null
          id?: string
          published?: boolean | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          views?: number | null}
        Update: {_content_type?: string
          content_url?: string | null
          created_at?: string
          creator_id?: string
          description?: string | null
          id?: string
          published?: boolean | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          views?: number | null}
        Relationships: [
          {_foreignKeyName: "content_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]}]
      }
      contract_templates: {_Row: {
          created_at: string
          id: string
          is_default: boolean | null
          template_data: Json
          title: string
          updated_at: string
          user_id: string}
        Insert: {_created_at?: string
          id?: string
          is_default?: boolean | null
          template_data: Json
          title: string
          updated_at?: string
          user_id: string}
        Update: {_created_at?: string
          id?: string
          is_default?: boolean | null
          template_data?: Json
          title?: string
          updated_at?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "contract_templates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      education: {_Row: {
          created_at: string
          degree: string
          description: string | null
          end_date: string | null
          field_of_study: string | null
          id: string
          institution: string
          institution_logo_url: string | null
          is_current: boolean
          location: string | null
          resume_id: string
          start_date: string
          updated_at: string}
        Insert: {_created_at?: string
          degree: string
          description?: string | null
          end_date?: string | null
          field_of_study?: string | null
          id?: string
          institution: string
          institution_logo_url?: string | null
          is_current?: boolean
          location?: string | null
          resume_id: string
          start_date: string
          updated_at?: string}
        Update: {_created_at?: string
          degree?: string
          description?: string | null
          end_date?: string | null
          field_of_study?: string | null
          id?: string
          institution?: string
          institution_logo_url?: string | null
          is_current?: boolean
          location?: string | null
          resume_id?: string
          start_date?: string
          updated_at?: string}
        Relationships: [
          {_foreignKeyName: "education_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "talent_resumes"
            referencedColumns: ["id"]}]
      }
      fraud_detection_reports: {_Row: {
          action_taken_count: number
          dangerous_count: number
          false_positive_count: number
          generated_at: string
          id: string
          report_data: Json | null
          report_month: string
          suspicious_count: number
          total_flags: number}
        Insert: {_action_taken_count?: number
          dangerous_count?: number
          false_positive_count?: number
          generated_at?: string
          id?: string
          report_data?: Json | null
          report_month: string
          suspicious_count?: number
          total_flags?: number}
        Update: {_action_taken_count?: number
          dangerous_count?: number
          false_positive_count?: number
          generated_at?: string
          id?: string
          report_data?: Json | null
          report_month?: string
          suspicious_count?: number
          total_flags?: number}
        Relationships: []
      }
      fraud_flags: {_Row: {
          action_taken: string | null
          content_excerpt: string
          content_id: string
          content_type: string
          gpt_classification: string | null
          gpt_explanation: string | null
          id: string
          ip_address: string | null
          is_false_positive: boolean | null
          reason: string
          reviewed_at: string | null
          reviewed_by: string | null
          severity: Database["public"]["Enums"]["fraud_severity"]
          status: string
          timestamp: string
          updated_at: string | null
          user_email: string | null
          user_id: string | null}
        Insert: {_action_taken?: string | null
          content_excerpt: string
          content_id: string
          content_type: string
          gpt_classification?: string | null
          gpt_explanation?: string | null
          id?: string
          ip_address?: string | null
          is_false_positive?: boolean | null
          reason: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: Database["public"]["Enums"]["fraud_severity"]
          status?: string
          timestamp?: string
          updated_at?: string | null
          user_email?: string | null
          user_id?: string | null}
        Update: {_action_taken?: string | null
          content_excerpt?: string
          content_id?: string
          content_type?: string
          gpt_classification?: string | null
          gpt_explanation?: string | null
          id?: string
          ip_address?: string | null
          is_false_positive?: boolean | null
          reason?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: Database["public"]["Enums"]["fraud_severity"]
          status?: string
          timestamp?: string
          updated_at?: string | null
          user_email?: string | null
          user_id?: string | null}
        Relationships: [
          {_foreignKeyName: "fraud_flags_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]},
          {_foreignKeyName: "fraud_flags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      hire_requests: {_Row: {
          attachments: Json | null
          budget_display: string | null
          budget_max: number | null
          budget_min: number | null
          created_at: string
          expiry_date: string | null
          id: string
          project_overview: string
          project_summary: string | null
          project_type: string | null
          requester_email: string
          requester_id: string | null
          requester_name: string
          status: string
          talent_id: string
          timeline: string
          updated_at: string}
        Insert: {_attachments?: Json | null
          budget_display?: string | null
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          project_overview: string
          project_summary?: string | null
          project_type?: string | null
          requester_email: string
          requester_id?: string | null
          requester_name: string
          status?: string
          talent_id: string
          timeline: string
          updated_at?: string}
        Update: {_attachments?: Json | null
          budget_display?: string | null
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          project_overview?: string
          project_summary?: string | null
          project_type?: string | null
          requester_email?: string
          requester_id?: string | null
          requester_name?: string
          status?: string
          talent_id?: string
          timeline?: string
          updated_at?: string}
        Relationships: []
      }
      interviews: {_Row: {
          client_id: string
          created_at: string
          duration_minutes: number
          end_time: string | null
          id: string
          interview_type: string
          meeting_link: string | null
          meeting_platform: string | null
          notes: string | null
          reminder_sent: string | null
          scheduled_date: string
          status: string
          talent_id: string
          title: string | null
          updated_at: string}
        Insert: {_client_id: string
          created_at?: string
          duration_minutes?: number
          end_time?: string | null
          id?: string
          interview_type?: string
          meeting_link?: string | null
          meeting_platform?: string | null
          notes?: string | null
          reminder_sent?: string | null
          scheduled_date: string
          status?: string
          talent_id: string
          title?: string | null
          updated_at?: string}
        Update: {_client_id?: string
          created_at?: string
          duration_minutes?: number
          end_time?: string | null
          id?: string
          interview_type?: string
          meeting_link?: string | null
          meeting_platform?: string | null
          notes?: string | null
          reminder_sent?: string | null
          scheduled_date?: string
          status?: string
          talent_id?: string
          title?: string | null
          updated_at?: string}
        Relationships: []
      }
      job_applications: {_Row: {
          cover_letter: string | null
          created_at: string | null
          id: string
          is_shortlisted: boolean | null
          job_id: string
          match_breakdown: Json | null
          match_score: number | null
          match_suggestion: string | null
          match_summary: string | null
          resume_id: string | null
          scored_at: string | null
          status: string
          talent_id: string
          viewed_at: string | null}
        Insert: {_cover_letter?: string | null
          created_at?: string | null
          id?: string
          is_shortlisted?: boolean | null
          job_id: string
          match_breakdown?: Json | null
          match_score?: number | null
          match_suggestion?: string | null
          match_summary?: string | null
          resume_id?: string | null
          scored_at?: string | null
          status?: string
          talent_id: string
          viewed_at?: string | null}
        Update: {_cover_letter?: string | null
          created_at?: string | null
          id?: string
          is_shortlisted?: boolean | null
          job_id?: string
          match_breakdown?: Json | null
          match_score?: number | null
          match_suggestion?: string | null
          match_summary?: string | null
          resume_id?: string | null
          scored_at?: string | null
          status?: string
          talent_id?: string
          viewed_at?: string | null}
        Relationships: [
          {_foreignKeyName: "job_applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]},
          {_foreignKeyName: "job_applications_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "talent_resumes"
            referencedColumns: ["id"]},
          {_foreignKeyName: "job_applications_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      jobs: {_Row: {
          budget: Json
          category: string
          client_id: string
          created_at: string
          deadline: string | null
          description: string
          id: string
          skills: string[]
          status: string
          title: string
          updated_at: string}
        Insert: {_budget?: Json
          category: string
          client_id: string
          created_at?: string
          deadline?: string | null
          description: string
          id?: string
          skills?: string[]
          status?: string
          title: string
          updated_at?: string}
        Update: {_budget?: Json
          category?: string
          client_id?: string
          created_at?: string
          deadline?: string | null
          description?: string
          id?: string
          skills?: string[]
          status?: string
          title?: string
          updated_at?: string}
        Relationships: [
          {_foreignKeyName: "jobs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      milestone_activities: {_Row: {
          action: string
          comment: string | null
          created_at: string
          id: string
          milestone_id: string
          new_status: string
          previous_status: string | null
          user_id: string}
        Insert: {_action: string
          comment?: string | null
          created_at?: string
          id?: string
          milestone_id: string
          new_status: string
          previous_status?: string | null
          user_id: string}
        Update: {_action?: string
          comment?: string | null
          created_at?: string
          id?: string
          milestone_id?: string
          new_status?: string
          previous_status?: string | null
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "milestone_activities_milestone_id_fkey"
            columns: ["milestone_id"]
            isOneToOne: false
            referencedRelation: "project_milestones"
            referencedColumns: ["id"]},
          {_foreignKeyName: "milestone_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      notification_preferences: {_Row: {
          created_at: string
          id: string
          marketing_emails: boolean | null
          system_notifications: boolean | null
          updated_at: string
          user_id: string}
        Insert: {_created_at?: string
          id?: string
          marketing_emails?: boolean | null
          system_notifications?: boolean | null
          updated_at?: string
          user_id: string}
        Update: {_created_at?: string
          id?: string
          marketing_emails?: boolean | null
          system_notifications?: boolean | null
          updated_at?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "notification_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      notifications: {_Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          related_id: string | null
          title: string
          type: string
          updated_at: string | null
          user_id: string}
        Insert: {_created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          related_id?: string | null
          title: string
          type: string
          updated_at?: string | null
          user_id: string}
        Update: {_created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          related_id?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      partner_payouts: {_Row: {
          amount: number
          completed_at: string | null
          created_at: string
          id: string
          method: string
          partner_id: string
          payout_details: Json | null
          status: string
          updated_at: string}
        Insert: {_amount: number
          completed_at?: string | null
          created_at?: string
          id?: string
          method: string
          partner_id: string
          payout_details?: Json | null
          status?: string
          updated_at?: string}
        Update: {_amount?: number
          completed_at?: string | null
          created_at?: string
          id?: string
          method?: string
          partner_id?: string
          payout_details?: Json | null
          status?: string
          updated_at?: string}
        Relationships: [
          {_foreignKeyName: "partner_payouts_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]}]
      }
      partner_profiles: {_Row: {
          audience_size: string
          bio: string
          commission_rate: number | null
          created_at: string
          fraud_flags: number | null
          id: string
          name: string
          niche: string
          payout_method: string
          social_media: Json | null
          status: string
          updated_at: string
          user_id: string
          website: string | null}
        Insert: {_audience_size: string
          bio: string
          commission_rate?: number | null
          created_at?: string
          fraud_flags?: number | null
          id?: string
          name: string
          niche: string
          payout_method: string
          social_media?: Json | null
          status?: string
          updated_at?: string
          user_id: string
          website?: string | null}
        Update: {_audience_size?: string
          bio?: string
          commission_rate?: number | null
          created_at?: string
          fraud_flags?: number | null
          id?: string
          name?: string
          niche?: string
          payout_method?: string
          social_media?: Json | null
          status?: string
          updated_at?: string
          user_id?: string
          website?: string | null}
        Relationships: [
          {_foreignKeyName: "partner_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      partner_referral_links: {_Row: {
          campaign: string | null
          clicks: number | null
          conversions: number | null
          created_at: string
          id: string
          name: string
          partner_id: string
          source: string | null
          updated_at: string}
        Insert: {_campaign?: string | null
          clicks?: number | null
          conversions?: number | null
          created_at?: string
          id?: string
          name: string
          partner_id: string
          source?: string | null
          updated_at?: string}
        Update: {_campaign?: string | null
          clicks?: number | null
          conversions?: number | null
          created_at?: string
          id?: string
          name?: string
          partner_id?: string
          source?: string | null
          updated_at?: string}
        Relationships: [
          {_foreignKeyName: "partner_referral_links_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]}]
      }
      portfolio_projects: {_Row: {
          created_at: string
          demo_url: string | null
          description: string | null
          github_url: string | null
          id: string
          image_url: string | null
          pdf_url: string | null
          technologies: string[] | null
          title: string
          updated_at: string
          user_id: string}
        Insert: {_created_at?: string
          demo_url?: string | null
          description?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          pdf_url?: string | null
          technologies?: string[] | null
          title: string
          updated_at?: string
          user_id: string}
        Update: {_created_at?: string
          demo_url?: string | null
          description?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          pdf_url?: string | null
          technologies?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "portfolio_projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      profiles: {_Row: {
          avatar_url: string | null
          average_rating: number | null
          bio: string | null
          created_at: string
          display_name: string | null
          headline: string | null
          id: string
          ip_address: string | null
          last_login_ip: string | null
          profile_complete: boolean
          rating_count: number | null
          rating_sum: number | null
          role: string | null
          signup_timestamp: string | null
          tenant_id: string | null
          updated_at: string
          user_type: string | null}
        Insert: {_avatar_url?: string | null
          average_rating?: number | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          headline?: string | null
          id: string
          ip_address?: string | null
          last_login_ip?: string | null
          profile_complete?: boolean
          rating_count?: number | null
          rating_sum?: number | null
          role?: string | null
          signup_timestamp?: string | null
          tenant_id?: string | null
          updated_at?: string
          user_type?: string | null}
        Update: {_avatar_url?: string | null
          average_rating?: number | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          headline?: string | null
          id?: string
          ip_address?: string | null
          last_login_ip?: string | null
          profile_complete?: boolean
          rating_count?: number | null
          rating_sum?: number | null
          role?: string | null
          signup_timestamp?: string | null
          tenant_id?: string | null
          updated_at?: string
          user_type?: string | null}
        Relationships: [
          {_foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]},
          {_foreignKeyName: "profiles_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "whitelabel_tenants"
            referencedColumns: ["id"]}]
      }
      project_milestones: {_Row: {
          amount: number
          created_at: string
          created_by: string
          deliverables: Json | null
          description: string | null
          due_date: string | null
          id: string
          project_id: string
          status: string
          title: string
          updated_at: string}
        Insert: {_amount: number
          created_at?: string
          created_by: string
          deliverables?: Json | null
          description?: string | null
          due_date?: string | null
          id?: string
          project_id: string
          status?: string
          title: string
          updated_at?: string}
        Update: {_amount?: number
          created_at?: string
          created_by?: string
          deliverables?: Json | null
          description?: string | null
          due_date?: string | null
          id?: string
          project_id?: string
          status?: string
          title?: string
          updated_at?: string}
        Relationships: [
          {_foreignKeyName: "project_milestones_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]},
          {_foreignKeyName: "project_milestones_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]}]
      }
      project_notes: {_Row: {
          content: string
          created_at: string
          id: string
          project_id: string
          user_id: string}
        Insert: {_content: string
          created_at?: string
          id?: string
          project_id: string
          user_id: string}
        Update: {_content?: string
          created_at?: string
          id?: string
          project_id?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "project_notes_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]},
          {_foreignKeyName: "project_notes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      projects: {_Row: {
          agreement_url: string | null
          client_id: string
          created_at: string
          id: string
          job_id: string
          payment_terms: string
          scope_summary: string
          start_date: string
          status: string
          talent_id: string
          updated_at: string}
        Insert: {_agreement_url?: string | null
          client_id: string
          created_at?: string
          id?: string
          job_id: string
          payment_terms: string
          scope_summary: string
          start_date: string
          status?: string
          talent_id: string
          updated_at?: string}
        Update: {_agreement_url?: string | null
          client_id?: string
          created_at?: string
          id?: string
          job_id?: string
          payment_terms?: string
          scope_summary?: string
          start_date?: string
          status?: string
          talent_id?: string
          updated_at?: string}
        Relationships: [
          {_foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]},
          {_foreignKeyName: "projects_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]},
          {_foreignKeyName: "projects_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      quote_requests: {_Row: {
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
          viewed_at: string | null}
        Insert: {_budget_display?: string | null
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
          viewed_at?: string | null}
        Update: {_budget_display?: string | null
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          id?: string
          is_archived?: boolean
          project_description?: string | null
          project_name?: string
          project_summary?: string
          replied_at?: string | null
          requester_email?: string
          requester_id?: string | null
          requester_name?: string
          start_date?: string | null
          status?: Database["public"]["Enums"]["quote_request_status"]
          talent_id?: string | null
          timeline?: string
          updated_at?: string
          viewed_at?: string | null}
        Relationships: [
          {_foreignKeyName: "quote_requests_requester_id_fkey"
            columns: ["requester_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]},
          {_foreignKeyName: "quote_requests_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]}]
      }
      referral_codes: {_Row: {
          code: string
          created_at: string
          id: string
          updated_at: string
          user_id: string}
        Insert: {_code: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string}
        Update: {_code?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "referral_codes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      referral_rewards: {_Row: {
          amount: number | null
          created_at: string
          expires_at: string | null
          id: string
          partner_id: string | null
          referral_id: string
          reward_type: string
          user_id: string}
        Insert: {_amount?: number | null
          created_at?: string
          expires_at?: string | null
          id?: string
          partner_id?: string | null
          referral_id: string
          reward_type: string
          user_id: string}
        Update: {_amount?: number | null
          created_at?: string
          expires_at?: string | null
          id?: string
          partner_id?: string | null
          referral_id?: string
          reward_type?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "referral_rewards_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]},
          {_foreignKeyName: "referral_rewards_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]},
          {_foreignKeyName: "referral_rewards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      referrals: {_Row: {
          completed_at: string | null
          created_at: string
          email: string | null
          id: string
          ip_address: string | null
          partner_id: string | null
          referral_code: string
          referred_id: string | null
          referred_user_type: string | null
          referrer_id: string
          referrer_user_type: string | null
          reward_issued: boolean
          reward_issued_at: string | null
          status: Database["public"]["Enums"]["referral_status"]}
        Insert: {_completed_at?: string | null
          created_at?: string
          email?: string | null
          id?: string
          ip_address?: string | null
          partner_id?: string | null
          referral_code: string
          referred_id?: string | null
          referred_user_type?: string | null
          referrer_id: string
          referrer_user_type?: string | null
          reward_issued?: boolean
          reward_issued_at?: string | null
          status?: Database["public"]["Enums"]["referral_status"]}
        Update: {_completed_at?: string | null
          created_at?: string
          email?: string | null
          id?: string
          ip_address?: string | null
          partner_id?: string | null
          referral_code?: string
          referred_id?: string | null
          referred_user_type?: string | null
          referrer_id?: string
          referrer_user_type?: string | null
          reward_issued?: boolean
          reward_issued_at?: string | null
          status?: Database["public"]["Enums"]["referral_status"]}
        Relationships: [
          {_foreignKeyName: "referrals_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]},
          {_foreignKeyName: "referrals_referral_code_fkey"
            columns: ["referral_code"]
            isOneToOne: false
            referencedRelation: "referral_codes"
            referencedColumns: ["code"]},
          {_foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]},
          {_foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      reminder_logs: {_Row: {
          clicked_at: string | null
          email_body: string
          email_subject: string
          id: string
          opened_at: string | null
          reminder_type: string
          sent_at: string | null
          user_id: string}
        Insert: {_clicked_at?: string | null
          email_body: string
          email_subject: string
          id?: string
          opened_at?: string | null
          reminder_type: string
          sent_at?: string | null
          user_id: string}
        Update: {_clicked_at?: string | null
          email_body?: string
          email_subject?: string
          id?: string
          opened_at?: string | null
          reminder_type?: string
          sent_at?: string | null
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "reminder_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      resume_skills: {_Row: {
          category: string | null
          created_at: string
          id: string
          name: string
          proficiency: number | null
          resume_id: string
          years_experience: number | null}
        Insert: {_category?: string | null
          created_at?: string
          id?: string
          name: string
          proficiency?: number | null
          resume_id: string
          years_experience?: number | null}
        Update: {_category?: string | null
          created_at?: string
          id?: string
          name?: string
          proficiency?: number | null
          resume_id?: string
          years_experience?: number | null}
        Relationships: [
          {_foreignKeyName: "resume_skills_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "talent_resumes"
            referencedColumns: ["id"]}]
      }
      review_reports: {_Row: {
          created_at: string
          id: string
          reason: string
          reporter_id: string
          resolved_at: string | null
          review_id: string
          status: string}
        Insert: {_created_at?: string
          id?: string
          reason: string
          reporter_id: string
          resolved_at?: string | null
          review_id: string
          status?: string}
        Update: {_created_at?: string
          id?: string
          reason?: string
          reporter_id?: string
          resolved_at?: string | null
          review_id?: string
          status?: string}
        Relationships: [
          {_foreignKeyName: "review_reports_reporter_id_fkey"
            columns: ["reporter_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]},
          {_foreignKeyName: "review_reports_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "reviews"
            referencedColumns: ["id"]}]
      }
      reviews: {_Row: {
          communication_rating: number | null
          created_at: string
          id: string
          is_anonymous: boolean
          is_visible: boolean
          project_id: string
          quality_rating: number | null
          rating: number
          report_count: number
          review_text: string
          reviewee_id: string
          reviewer_id: string
          status: string
          timeliness_rating: number | null
          updated_at: string
          would_work_again: boolean | null}
        Insert: {_communication_rating?: number | null
          created_at?: string
          id?: string
          is_anonymous?: boolean
          is_visible?: boolean
          project_id: string
          quality_rating?: number | null
          rating: number
          report_count?: number
          review_text: string
          reviewee_id: string
          reviewer_id: string
          status?: string
          timeliness_rating?: number | null
          updated_at?: string
          would_work_again?: boolean | null}
        Update: {_communication_rating?: number | null
          created_at?: string
          id?: string
          is_anonymous?: boolean
          is_visible?: boolean
          project_id?: string
          quality_rating?: number | null
          rating?: number
          report_count?: number
          review_text?: string
          reviewee_id?: string
          reviewer_id?: string
          status?: string
          timeliness_rating?: number | null
          updated_at?: string
          would_work_again?: boolean | null}
        Relationships: [
          {_foreignKeyName: "reviews_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]},
          {_foreignKeyName: "reviews_reviewee_id_fkey"
            columns: ["reviewee_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]},
          {_foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      scheduled_jobs: {_Row: {
          completed_at: string | null
          created_at: string
          id: string
          job_type: string
          payload: Json | null
          scheduled_for: string
          status: string
          updated_at: string}
        Insert: {_completed_at?: string | null
          created_at?: string
          id?: string
          job_type: string
          payload?: Json | null
          scheduled_for: string
          status: string
          updated_at?: string}
        Update: {_completed_at?: string | null
          created_at?: string
          id?: string
          job_type?: string
          payload?: Json | null
          scheduled_for?: string
          status?: string
          updated_at?: string}
        Relationships: []
      }
      subscriptions: {_Row: {
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string}
        Insert: {_created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type: string
          status: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string}
        Update: {_created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      talent_resumes: {_Row: {
          created_at: string
          headline: string | null
          id: string
          is_active: boolean
          summary: string | null
          title: string
          updated_at: string
          user_id: string}
        Insert: {_created_at?: string
          headline?: string | null
          id?: string
          is_active?: boolean
          summary?: string | null
          title?: string
          updated_at?: string
          user_id: string}
        Update: {_created_at?: string
          headline?: string | null
          id?: string
          is_active?: boolean
          summary?: string | null
          title?: string
          updated_at?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "talent_resumes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      tenant_administrators: {_Row: {
          created_at: string | null
          id: string
          tenant_id: string
          user_id: string}
        Insert: {_created_at?: string | null
          id?: string
          tenant_id: string
          user_id: string}
        Update: {_created_at?: string | null
          id?: string
          tenant_id?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "tenant_administrators_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "whitelabel_tenants"
            referencedColumns: ["id"]},
          {_foreignKeyName: "tenant_administrators_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      user_onboarding: {_Row: {
          application_sent: boolean | null
          application_sent_at: string | null
          availability_set: boolean | null
          availability_set_at: string | null
          created_at: string
          id: string
          job_posted: boolean | null
          job_posted_at: string | null
          last_reminder_sent: string | null
          match_received: boolean | null
          match_received_at: string | null
          match_viewed: boolean | null
          match_viewed_at: string | null
          profile_completed: boolean | null
          profile_completed_at: string | null
          quote_received: boolean | null
          quote_received_at: string | null
          reminder_count: number | null
          role: string
          skills_added: boolean | null
          skills_added_at: string | null
          talent_invited: boolean | null
          talent_invited_at: string | null
          updated_at: string
          user_id: string | null}
        Insert: {_application_sent?: boolean | null
          application_sent_at?: string | null
          availability_set?: boolean | null
          availability_set_at?: string | null
          created_at?: string
          id?: string
          job_posted?: boolean | null
          job_posted_at?: string | null
          last_reminder_sent?: string | null
          match_received?: boolean | null
          match_received_at?: string | null
          match_viewed?: boolean | null
          match_viewed_at?: string | null
          profile_completed?: boolean | null
          profile_completed_at?: string | null
          quote_received?: boolean | null
          quote_received_at?: string | null
          reminder_count?: number | null
          role: string
          skills_added?: boolean | null
          skills_added_at?: string | null
          talent_invited?: boolean | null
          talent_invited_at?: string | null
          updated_at?: string
          user_id?: string | null}
        Update: {_application_sent?: boolean | null
          application_sent_at?: string | null
          availability_set?: boolean | null
          availability_set_at?: string | null
          created_at?: string
          id?: string
          job_posted?: boolean | null
          job_posted_at?: string | null
          last_reminder_sent?: string | null
          match_received?: boolean | null
          match_received_at?: string | null
          match_viewed?: boolean | null
          match_viewed_at?: string | null
          profile_completed?: boolean | null
          profile_completed_at?: string | null
          quote_received?: boolean | null
          quote_received_at?: string | null
          reminder_count?: number | null
          role?: string
          skills_added?: boolean | null
          skills_added_at?: string | null
          talent_invited?: boolean | null
          talent_invited_at?: string | null
          updated_at?: string
          user_id?: string | null}
        Relationships: [
          {_foreignKeyName: "user_onboarding_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      user_privacy_settings: {_Row: {
          activity_monitoring_enabled: boolean | null
          ai_analysis_enabled: boolean | null
          id: string
          message_scanning_enabled: boolean | null
          updated_at: string | null}
        Insert: {_activity_monitoring_enabled?: boolean | null
          ai_analysis_enabled?: boolean | null
          id: string
          message_scanning_enabled?: boolean | null
          updated_at?: string | null}
        Update: {_activity_monitoring_enabled?: boolean | null
          ai_analysis_enabled?: boolean | null
          id?: string
          message_scanning_enabled?: boolean | null
          updated_at?: string | null}
        Relationships: [
          {_foreignKeyName: "user_privacy_settings_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      webhook_configs: {_Row: {
          created_at: string
          event_types: string[]
          id: string
          is_active: boolean
          last_triggered_at: string | null
          name: string
          secret: string | null
          updated_at: string
          url: string
          user_id: string}
        Insert: {_created_at?: string
          event_types: string[]
          id?: string
          is_active?: boolean
          last_triggered_at?: string | null
          name: string
          secret?: string | null
          updated_at?: string
          url: string
          user_id: string}
        Update: {_created_at?: string
          event_types?: string[]
          id?: string
          is_active?: boolean
          last_triggered_at?: string | null
          name?: string
          secret?: string | null
          updated_at?: string
          url?: string
          user_id?: string}
        Relationships: [
          {_foreignKeyName: "webhook_configs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      whitelabel_tenants: {_Row: {
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
          updated_at: string | null}
        Insert: {_account_manager_id?: string | null
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
          updated_at?: string | null}
        Update: {_account_manager_id?: string | null
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
          updated_at?: string | null}
        Relationships: [
          {_foreignKeyName: "whitelabel_tenants_account_manager_id_fkey"
            columns: ["account_manager_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]}]
      }
      work_history: {_Row: {
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
          updated_at: string}
        Insert: {_company_logo_url?: string | null
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
          updated_at?: string}
        Update: {_company_logo_url?: string | null
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
          updated_at?: string}
        Relationships: [
          {_foreignKeyName: "work_history_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "talent_resumes"
            referencedColumns: ["id"]}]
      }
    }
    Views: {_conversion_rates: {
        Row: {
          conversion_count: number | null
          conversion_rate: number | null
          conversion_type: string | null
          date: string | null
          view_count: number | null}
        Relationships: []
      }
      daily_page_views: {_Row: {
          date: string | null
          path: string | null
          view_count: number | null}
        Relationships: []
      }
      user_metrics: {_Row: {
          job_applications: number | null
          profile_views: number | null
          quote_invites: number | null
          success_rate: number | null
          user_id: string | null}
        Insert: {_job_applications?: never
          profile_views?: never
          quote_invites?: never
          success_rate?: never
          user_id?: string | null}
        Update: {_job_applications?: never
          profile_views?: never
          quote_invites?: never
          success_rate?: never
          user_id?: string | null}
        Relationships: []
      }
    }
    Functions: {_check_users_needing_reminders: {
        Args: Record<PropertyKey, _never>
        Returns: {
          user_id: string
          email: string
          display_name: string
          user_type: string
          last_login: string
          reminder_type: string
          days_since_login: number
          onboarding_status: Json}[]
      }
      complete_referral: {_Args: { _referred_id: string; _user_type: string}
        Returns: undefined
      }
      create_notification: {_Args: {
          _user_id: string
          _title: string
          _message: string
          _type: string
          _related_id?: string}
        Returns: string
      }
      create_scheduled_reminders: {_Args: Record<PropertyKey, _never>
        Returns: undefined}
      flag_suspicious_content: {_Args: {
          p_user_id: string
          p_user_email: string
          p_content_type: string
          p_content_id: string
          p_content_excerpt: string
          p_severity: string
          p_reason: string
          p_ip_address: string}
        Returns: string
      }
      generate_api_key: {_Args: { prefix: string}
        Returns: string
      }
      generate_fraud_report: {_Args: { year: number; month: number}
        Returns: string
      }
      generate_referral_code: {_Args: { user_id: string}
        Returns: string
      }
      get_api_key_user_id: {_Args: { key_prefix: string; provided_key: string}
        Returns: string
      }
      get_current_tenant_id: {_Args: Record<PropertyKey, _never>
        Returns: string}
      get_event_distribution: {_Args: { days_back?: number}
        Returns: {_date: string
          event_type: string
          count: number}[]
      }
      hash_api_key: {_Args: { api_key: string}
        Returns: string
      }
      schedule_email_reminders: {_Args: Record<PropertyKey, _never>
        Returns: number}
      trigger_resume_scoring: {_Args: { application_id: string}
        Returns: undefined
      }
      update_onboarding_milestone: {_Args: { _user_id: string; _milestone: string; _status: boolean}
        Returns: undefined
      }
      verify_api_key: {_Args: { provided_key: string; stored_hash: string}
        Returns: boolean
      }
    }
    Enums: {_api_key_scope:
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
      referral_status: "pending" | "completed" | "expired"}
    CompositeTypes: {_[_ in never]: never}
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | {_schema: keyof Database},
  TableName extends DefaultSchemaTableNameOrOptions extends {_schema: keyof Database}
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {_schema: keyof Database}
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {_Row: infer R}
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {_Row: infer R}
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | {_schema: keyof Database},
  TableName extends DefaultSchemaTableNameOrOptions extends {_schema: keyof Database}
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {_schema: keyof Database}
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {_Insert: infer I}
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {_Insert: infer I}
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | {_schema: keyof Database},
  TableName extends DefaultSchemaTableNameOrOptions extends {_schema: keyof Database}
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {_schema: keyof Database}
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {_Update: infer U}
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {_Update: infer U}
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | {_schema: keyof Database},
  EnumName extends DefaultSchemaEnumNameOrOptions extends {_schema: keyof Database}
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {_schema: keyof Database}
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | {_schema: keyof Database},
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {_schema: keyof Database}
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {_schema: keyof Database}
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const _Constants = {_public: {
    Enums: {
      api_key_scope: [
        "jobs:read", _"jobs:write", _"talent:read", _"quotes:write", _"webhooks:manage"], _fraud_severity: ["safe", _"suspicious", _"dangerous"], _quote_request_status: [
        "new", _"in_review", _"accepted", _"responded", _"closed", _"archived"], _referral_status: ["pending", _"completed", _"expired"]}}} as const
