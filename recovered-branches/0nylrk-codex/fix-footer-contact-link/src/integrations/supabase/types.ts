
export type Json =;
  | string;
  | number;
  | boolean;
  | null;
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {,
  Tables: {
      ai_chats: {,
  Row: {
          created_at: string;,
  id: string;
          message: string;,
  response: string;
          user_id: string;
        }
        Insert: {
          created_at?: string;
          id?: string;
        Update: {
          message?: string;
          response?: string;
          user_id?: string;
        Relationships: [;
          {
            foreignKeyName: "ai_chats_user_id_fkey";",]"
  columns: ["user_id"];"
            isOneToOne: false;,"
  referenced_relation: "user_metrics";""
            referenced_columns: ["user_id"];"
          }];
      analytics_events: {,
          created_at: string | null;,
  event_type: string;
          id: string;,
  metadata: Json | null;
          path: string | null;,
  session_id: string | null;
          user_id: string | null;
          created_at?: string | null;
          metadata?: Json | null;
          path?: string | null;
          session_id?: string | null;
          user_id?: string | null;
          event_type?: string;
          {"
            foreignKeyName: "analytics_events_user_id_fkey";",]"
      api_keys: {,
  expires_at: string | null;
  is_active: boolean;
          key_hash: string;,
  key_prefix: string;
          last_used_at: string | null;,
  name: string;"
          scopes: Database["public"]["Enums"]["api_key_scope"][];",
          expires_at?: string | null;
          is_active?: boolean;
          last_used_at?: string | null;
          scopes?: Database["public"]["Enums"]["api_key_scope"][];"
          key_hash?: string;
          key_prefix?: string;
          name?: string;"
            foreignKeyName: "api_keys_user_id_fkey";",]"


      api_logs: {;,
  Row: {;

          api_key_id: string | null;,
  created_at: string;
          endpoint: string;,
          ip_address: string | null;,
  method: string;
          response_time_ms: number | null;,
  status_code: number;
          user_agent: string | null;,
        Insert: {,
          api_key_id?: string | null;
          endpoint: string;
          ip_address?: string | null;
          response_time_ms?: number | null;
          user_agent?: string | null;
          endpoint?: string;
          method?: string;
          status_code?: number;



        Relationships: [
            foreignKeyName: "api_logs_api_key_id_fkey"",]"
  columns: ["api_key_id"]"
  referencedRelation: "api_keys"""
            foreignKeyName: "api_logs_api_key_id_fkey";","
  columns: ["api_key_id"];"
  referenced_relation: "api_keys";""
            referenced_columns: ["id"];"
"
            referencedColumns: ["id"]","
  referencedColumns: ["id"];"
          };"
            referencedColumns: ["id"]"
          },
            foreignKeyName: "api_logs_user_id_fkey";",]"
      certifications: {,
  credential_id: string | null;
          credential_url: string | null;,
  expiration_date: string | null;
  issue_date: string | null;
          issuing_organization: string;,
  name: string;
          resume_id: string;
          credential_id?: string | null;
          credential_url?: string | null;
          expiration_date?: string | null;
          issue_date?: string | null;
          issuing_organization?: string;
          name?: string;
          resume_id?: string;
            foreignKeyName: "certifications_resume_id_fkey";",]"
  columns: ["resume_id"];"
  referenced_relation: "talent_resumes";""
      content: {,
          content_type: string;,
  content_url: string | null;
  creator_id: string;
          description: string | null;,
          published: boolean | null;,
  thumbnail_url: string | null;
          title: string;,
  updated_at: string;
          views: number | null;
  content_type: string;
          content_url?: string | null;
          description?: string | null;
          published?: boolean | null;
          thumbnail_url?: string | null;
          title: string;
          updated_at?: string;
          views?: number | null;
          content_type?: string;
          creator_id?: string;
          title?: string;
            foreignKeyName: "content_creator_id_fkey";",]"
  columns: ["creator_id"];"
  referenced_relation: "profiles";""
      contract_templates: {,
          is_default: boolean | null;,
  template_data: Json;
          is_default?: boolean | null;
          template_data: Json;,
          template_data?: Json;
            foreignKeyName: "contract_templates_user_id_fkey";",]"
      education: {,
  degree: string;
  end_date: string | null;
          field_of_study: string | null;,
          institution: string;,
  institution_logo_url: string | null;
          is_current: boolean;,
  location: string | null;
          resume_id: string;,
  start_date: string;
          end_date?: string | null;
          field_of_study?: string | null;
          institution: string;
          institution_logo_url?: string | null;
          is_current?: boolean;
          location?: string | null;
          degree?: string;
          institution?: string;
          start_date?: string;
            foreignKeyName: "education_resume_id_fkey";",]"
      fraud_detection_reports: {,
          action_taken_count: number;,
  dangerous_count: number;
          false_positive_count: number;,
  generated_at: string;
  report_data: Json | null;
          report_month: string;,
  suspicious_count: number;
          total_flags: number;
          action_taken_count?: number;
          dangerous_count?: number;
          false_positive_count?: number;
          generated_at?: string;
          report_data?: Json | null;
          report_month: string;
          suspicious_count?: number;
          total_flags?: number;
          report_month?: string;
        Relationships: [];
      fraud_flags: {,
          action_taken: string | null;,
  content_excerpt: string;
          content_id: string;,
          gpt_classification: string | null;,
  gpt_explanation: string | null;
  ip_address: string | null;
          is_false_positive: boolean | null;,
  reason: string;
          reviewed_at: string | null;,
  reviewed_by: string | null;"
          severity: Database["public"]["Enums"]["fraud_severity"];",
  status: string;
          timestamp: string;,
  updated_at: string | null;
          user_email: string | null;,
          action_taken?: string | null;
          content_excerpt: string;,
  content_id: string;
          gpt_classification?: string | null;
          gpt_explanation?: string | null;
          is_false_positive?: boolean | null;
          reviewed_at?: string | null;
          reviewed_by?: string | null;"
          severity?: Database["public"]["Enums"]["fraud_severity"];"
          status?: string;
          timestamp?: string;
          updated_at?: string | null;
          user_email?: string | null;
          content_excerpt?: string;
          content_id?: string;
          reason?: string;
            foreignKeyName: "fraud_flags_reviewed_by_fkey";",]"
  columns: ["reviewed_by"];"


            foreignKeyName: "fraud_flags_user_id_fkey";","
      hire_requests: {,
          attachments: Json | null;,
  budget_display: string | null;
          budget_max: number | null;,
  budget_min: number | null;
  expiry_date: string | null;
  project_overview: string;
          project_summary: string | null;,
  project_type: string | null;
          requester_email: string;,
  requester_id: string | null;
          requester_name: string;,
          talent_id: string;,
  timeline: string;
          attachments?: Json | null;
          budget_display?: string | null;
          budget_max?: number | null;
          budget_min?: number | null;
          expiry_date?: string | null;
          project_summary?: string | null;
          project_type?: string | null;
          requester_email: string;
          requester_id?: string | null;
          requester_name: string;
          project_overview?: string;
          requester_email?: string;
          requester_name?: string;
          talent_id?: string;
          timeline?: string;
      interviews: {,
          client_id: string;,
          duration_minutes: number;,
  end_time: string | null;
  interview_type: string;
          meeting_link: string | null;,
  meeting_platform: string | null;
          notes: string | null;,
  reminder_sent: string | null;
          scheduled_date: string;,
  title: string | null;
  client_id: string;
          duration_minutes?: number;
          end_time?: string | null;
          interview_type?: string;
          meeting_link?: string | null;
          meeting_platform?: string | null;
          notes?: string | null;
          reminder_sent?: string | null;
          scheduled_date: string;
          talent_id: string;
          title?: string | null;
          client_id?: string;
          scheduled_date?: string;
      job_applications: {,
          cover_letter: string | null;,
  created_at: string | null;
  is_shortlisted: boolean | null;
          job_id: string;,
  match_breakdown: Json | null;
          match_score: number | null;,
  match_suggestion: string | null;
          match_summary: string | null;,
  resume_id: string | null;
          scored_at: string | null;,
  viewed_at: string | null;
          cover_letter?: string | null;
          is_shortlisted?: boolean | null;
          job_id: string;
          match_breakdown?: Json | null;
          match_score?: number | null;
          match_suggestion?: string | null;
          match_summary?: string | null;
          resume_id?: string | null;
          scored_at?: string | null;
          viewed_at?: string | null;
          job_id?: string;




            foreignKeyName: "job_applications_resume_id_fkey"",]"
  columns: ["resume_id"]"
  referencedRelation: "talent_resumes"""
  foreignKeyName: "job_applications_job_id_fkey";""
            columns: ["job_id"];",
  isOneToOne: false;"
            referenced_relation: "jobs";","


            foreignKeyName: "job_applications_resume_id_fkey";","
            foreignKeyName: "job_applications_talent_id_fkey";","
  columns: ["talent_id"];"
      jobs: {,
          budget: Json;,
  category: string;
          deadline: string | null;,
  description: string;
  skills: string[];
          status: string;,
          budget?: Json;
          category: string;,
          deadline?: string | null;
          skills?: string[];
          category?: string;
          description?: string;
            foreignKeyName: "jobs_client_id_fkey";",]"
  columns: ["client_id"];"
      milestone_activities: {,
          action: string;,
  comment: string | null;
          milestone_id: string;,
  new_status: string;
          previous_status: string | null;,
  action: string;
          comment?: string | null;
          previous_status?: string | null;
          action?: string;
          milestone_id?: string;
          new_status?: string;
            foreignKeyName: "milestone_activities_milestone_id_fkey";",]"
  columns: ["milestone_id"];"
  referenced_relation: "project_milestones";""


            foreignKeyName: "milestone_activities_user_id_fkey";","
      notification_preferences: {,
          marketing_emails: boolean | null;,
  system_notifications: boolean | null;
          updated_at: string;,
          marketing_emails?: boolean | null;
          system_notifications?: boolean | null;
      notifications: {,
  read: boolean | null;
          related_id: string | null;,
          type: string;,
          message: string;
          read?: boolean | null;
          related_id?: string | null;
  type: string;
          type?: string;
      partner_payouts: {,
          amount: number;,
  completed_at: string | null;
          method: string;,
  partner_id: string;
          payout_details: Json | null;,
  amount: number;
          completed_at?: string | null;
          payout_details?: Json | null;
          amount?: number;
          partner_id?: string;
            foreignKeyName: "partner_payouts_partner_id_fkey";",]"
  columns: ["partner_id"];"
  referenced_relation: "partner_profiles";""
      partner_profiles: {,
          audience_size: string;,
  bio: string;
          commission_rate: number | null;,
          fraud_flags: number | null;,
          name: string;,
  niche: string;
          payout_method: string;,
  social_media: Json | null;
          user_id: string;,
  website: string | null;
  audience_size: string;
          commission_rate?: number | null;
          fraud_flags?: number | null;
          payout_method: string;
          social_media?: Json | null;
          website?: string | null;
          audience_size?: string;
          bio?: string;
          niche?: string;
          payout_method?: string;
            foreignKeyName: "partner_profiles_user_id_fkey";",]"
      partner_referral_links: {,
          campaign: string | null;,
  clicks: number | null;
          conversions: number | null;,
          partner_id: string;,
  source: string | null;
          campaign?: string | null;
          clicks?: number | null;
          conversions?: number | null;
          source?: string | null;
            foreignKeyName: "partner_referral_links_partner_id_fkey";",]"
      portfolio_projects: {,
  demo_url: string | null;
  github_url: string | null;
  image_url: string | null;
          pdf_url: string | null;,
  technologies: string[] | null;
          demo_url?: string | null;
          github_url?: string | null;
          image_url?: string | null;
          pdf_url?: string | null;
          technologies?: string[] | null;
            foreignKeyName: "portfolio_projects_user_id_fkey";",]"
      profiles: {,
          avatar_url: string | null;,
  average_rating: number | null;
          bio: string | null;,
          display_name: string | null;,
  headline: string | null;
          last_login_ip: string | null;,
  profile_complete: boolean;
          rating_count: number | null;,
  rating_sum: number | null;
          role: string | null;,
  signup_timestamp: string | null;
          tenant_id: string | null;,
          user_type: string | null;
          avatar_url?: string | null;
          average_rating?: number | null;
          bio?: string | null;
          display_name?: string | null;
          headline?: string | null;
          last_login_ip?: string | null;
          profile_complete?: boolean;
          rating_count?: number | null;
          rating_sum?: number | null;
          role?: string | null;
          signup_timestamp?: string | null;
          tenant_id?: string | null;
          user_type?: string | null;
            foreignKeyName: "profiles_id_fkey";",]"
  columns: ["id"];"
            isOneToOne: true;,"


            foreignKeyName: "profiles_tenant_id_fkey";","
  columns: ["tenant_id"];"
  referenced_relation: "whitelabel_tenants";""
      project_milestones: {,
          created_by: string;,
  deliverables: Json | null;
  due_date: string | null;
  project_id: string;
          created_by: string;
          deliverables?: Json | null;
          due_date?: string | null;
          created_by?: string;
          project_id?: string;
            foreignKeyName: "project_milestones_created_by_fkey";",]"
  columns: ["created_by"];"



            foreignKeyName: "project_milestones_project_id_fkey";","
  columns: ["project_id"];"
  referenced_relation: "projects";""
            foreignKeyName: "project_notes_project_id_fkey";","


            foreignKeyName: "project_notes_user_id_fkey";","
      projects: {,
          agreement_url: string | null;,
  payment_terms: string;
          scope_summary: string;,
          agreement_url?: string | null;
          payment_terms?: string;
          scope_summary?: string;




            foreignKeyName: "projects_job_id_fkey"",]"
  columns: ["job_id"]"
  referencedRelation: "jobs"""
  foreignKeyName: "projects_client_id_fkey";""
            columns: ["client_id"];",
            referenced_relation: "user_metrics";","
            foreignKeyName: "projects_talent_id_fkey";","
      quote_requests: {,
          budget_display: string | null;,
  budget_max: number | null;
          budget_min: number | null;,
  is_archived: boolean;
          project_description: string | null;,
  project_name: string;
          project_summary: string;,
  replied_at: string | null;
  start_date: string | null;"
          status: Database["public"]["Enums"]["quote_request_status"];",
  talent_id: string | null;
          timeline: string;,
          is_archived?: boolean;
          project_description?: string | null;
          project_name: string;,
  project_summary: string;
          replied_at?: string | null;
          start_date?: string | null;"
          status?: Database["public"]["Enums"]["quote_request_status"];"
          talent_id?: string | null;
          project_name?: string;
          project_summary?: string;
            foreignKeyName: "quote_requests_requester_id_fkey";",]"
  columns: ["requester_id"];"


            foreignKeyName: "quote_requests_talent_id_fkey";","


      referral_codes: {;,

          code: string;,
          code: string;
          code?: string;



            foreignKeyName: "referral_codes_user_id_fkey";",]"
      referral_rewards: {,
          amount: number | null;,
          expires_at: string | null;,
          partner_id: string | null;,
  referral_id: string;
          reward_type: string;,
          amount?: number | null;
          partner_id?: string | null;
          referral_id: string;,
  reward_type: string;
          referral_id?: string;
          reward_type?: string;




            foreignKeyName: "referral_rewards_referral_id_fkey"",]"
  columns: ["referral_id"]"
  referencedRelation: "referrals"""
  foreignKeyName: "referral_rewards_partner_id_fkey";""
            columns: ["partner_id"];",
            referenced_relation: "partner_profiles";","



            foreignKeyName: "referral_rewards_referral_id_fkey";","
  columns: ["referral_id"];"
  referenced_relation: "referrals";""
            foreignKeyName: "referral_rewards_user_id_fkey";","
      referrals: {,
          completed_at: string | null;,
          email: string | null;,
  partner_id: string | null;
          referral_code: string;,
  referred_id: string | null;
          referred_user_type: string | null;,
  referrer_id: string;
          referrer_user_type: string | null;,
  reward_issued: boolean;
          reward_issued_at: string | null;,"
  status: Database["public"]["Enums"]["referral_status"];"
          email?: string | null;
          referral_code: string;
          referred_id?: string | null;
          referred_user_type?: string | null;
          referrer_user_type?: string | null;
          reward_issued?: boolean;
          reward_issued_at?: string | null;"
          status?: Database["public"]["Enums"]["referral_status"];"
          referral_code?: string;
          referrer_id?: string;




            foreignKeyName: "referrals_referral_code_fkey"",]"
  columns: ["referral_code"]"
  referencedRelation: "referral_codes"""
            referencedColumns: ["code"]"


            foreignKeyName: "referrals_referred_id_fkey"","
  columns: ["referred_id"]"
  referencedRelation: "user_metrics"""
            referencedColumns: ["user_id"]","
  foreignKeyName: "referrals_partner_id_fkey";""



            foreignKeyName: "referrals_referral_code_fkey";","
  columns: ["referral_code"];"
  referenced_relation: "referral_codes";""
            referenced_columns: ["code"];"
            foreignKeyName: "referrals_referred_id_fkey";","
  columns: ["referred_id"];"
            foreignKeyName: "referrals_referrer_id_fkey";","
  columns: ["referrer_id"];"


      reminder_logs: {;,

          clicked_at: string | null;,
  email_body: string;
          email_subject: string;,
          opened_at: string | null;,
  reminder_type: string;
          sent_at: string | null;,
          clicked_at?: string | null;
          email_body: string;,
  email_subject: string;
          opened_at?: string | null;
          sent_at?: string | null;
          email_body?: string;
          email_subject?: string;
          reminder_type?: string;



            foreignKeyName: "resume_skills_resume_id_fkey";",]"
      review_reports: {,
          reason: string;,
  reporter_id: string;
          resolved_at: string | null;,
  review_id: string;
          resolved_at?: string | null;
          reporter_id?: string;
          review_id?: string;
            foreignKeyName: "review_reports_reporter_id_fkey";",]"
  columns: ["reporter_id"];"


            foreignKeyName: "review_reports_review_id_fkey";","
  columns: ["review_id"];"
  referenced_relation: "reviews";""
      reviews: {,
          communication_rating: number | null;,
  is_anonymous: boolean;
          is_visible: boolean;,
          quality_rating: number | null;,
  rating: number;
          report_count: number;,
  review_text: string;
          reviewee_id: string;,
  reviewer_id: string;
  timeliness_rating: number | null;
  would_work_again: boolean | null;
          communication_rating?: number | null;
          is_anonymous?: boolean;
          is_visible?: boolean;
          quality_rating?: number | null;
          report_count?: number;
          review_text: string;,
  reviewee_id: string;
          timeliness_rating?: number | null;
          would_work_again?: boolean | null;
          rating?: number;
          review_text?: string;
          reviewee_id?: string;
          reviewer_id?: string;




            foreignKeyName: "reviews_reviewee_id_fkey"",]"
  columns: ["reviewee_id"]"
  foreignKeyName: "reviews_project_id_fkey";""
            columns: ["project_id"];",
            referenced_relation: "projects";","



            foreignKeyName: "reviews_reviewee_id_fkey";","
  columns: ["reviewee_id"];"
            foreignKeyName: "reviews_reviewer_id_fkey";","
  columns: ["reviewer_id"];"
      scheduled_jobs: {,
  job_type: string;
          payload: Json | null;,
  scheduled_for: string;
          payload?: Json | null;
          scheduled_for: string;,
          job_type?: string;
          scheduled_for?: string;
      subscriptions: {,
  current_period_end: string | null;
          current_period_start: string | null;,
          plan_type: string;,
          stripe_customer_id: string | null;,
  stripe_subscription_id: string | null;
          current_period_end?: string | null;
          current_period_start?: string | null;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          plan_type?: string;
            foreignKeyName: "subscriptions_user_id_fkey";",]"
      talent_resumes: {,
          summary: string | null;,
          summary?: string | null;
            foreignKeyName: "talent_resumes_user_id_fkey";",]"
      tenant_administrators: {,
          tenant_id: string;,
          tenant_id?: string;
            foreignKeyName: "tenant_administrators_tenant_id_fkey";",]"


            foreignKeyName: "tenant_administrators_user_id_fkey";","
      user_onboarding: {,
          application_sent: boolean | null;,
  application_sent_at: string | null;
          availability_set: boolean | null;,
  availability_set_at: string | null;
          job_posted: boolean | null;,
  job_posted_at: string | null;
          last_reminder_sent: string | null;,
  match_received: boolean | null;
          match_received_at: string | null;,
  match_viewed: boolean | null;
          match_viewed_at: string | null;,
  profile_completed: boolean | null;
          profile_completed_at: string | null;,
  quote_received: boolean | null;
          quote_received_at: string | null;,
  reminder_count: number | null;
          role: string;,
  skills_added: boolean | null;
          skills_added_at: string | null;,
  talent_invited: boolean | null;
          talent_invited_at: string | null;,
          application_sent?: boolean | null;
          application_sent_at?: string | null;
          availability_set?: boolean | null;
          availability_set_at?: string | null;
          job_posted?: boolean | null;
          job_posted_at?: string | null;
          last_reminder_sent?: string | null;
          match_received?: boolean | null;
          match_received_at?: string | null;
          match_viewed?: boolean | null;
          match_viewed_at?: string | null;
          profile_completed?: boolean | null;
          profile_completed_at?: string | null;
          quote_received?: boolean | null;
          quote_received_at?: string | null;
          reminder_count?: number | null;
          role: string;
          skills_added?: boolean | null;
          skills_added_at?: string | null;
          talent_invited?: boolean | null;
          talent_invited_at?: string | null;
          role?: string;
            foreignKeyName: "user_onboarding_user_id_fkey";",]"
      user_privacy_settings: {,
          activity_monitoring_enabled: boolean | null;,
  ai_analysis_enabled: boolean | null;
  message_scanning_enabled: boolean | null;
          activity_monitoring_enabled?: boolean | null;
          ai_analysis_enabled?: boolean | null;
          message_scanning_enabled?: boolean | null;
            foreignKeyName: "user_privacy_settings_id_fkey";",]"
      webhook_configs: {,
  event_types: string[];
          last_triggered_at: string | null;,
          secret: string | null;,
          url: string;,
          last_triggered_at?: string | null;
          secret?: string | null;
          event_types?: string[];
          url?: string;
            foreignKeyName: "webhook_configs_user_id_fkey";",]"
      whitelabel_tenants: {,
          account_manager_id: string | null;,
  brand_name: string;
  custom_domain: string | null;
          dns_verified: boolean;,
  email_template_override: Json | null;
          landing_page_copy: Json | null;,
  logo_url: string | null;
          primary_color: string;,
  subdomain: string;
          theme_preset: string;,
          account_manager_id?: string | null;
          custom_domain?: string | null;
          dns_verified?: boolean;
          email_template_override?: Json | null;
          landing_page_copy?: Json | null;
          logo_url?: string | null;
          primary_color?: string;
          theme_preset?: string;
          brand_name?: string;
          subdomain?: string;
            foreignKeyName: "whitelabel_tenants_account_manager_id_fkey";",]"
  columns: ["account_manager_id"];"
      work_history: {,
          company_logo_url: string | null;,
  company_name: string;
  description: string | null;
          end_date: string | null;,
  role_title: string;
          start_date: string;,
          company_logo_url?: string | null;
          company_name?: string;
          role_title?: string;
            foreignKeyName: "work_history_resume_id_fkey";",]"
    Views: {,
  conversion_rates: {
        Row: {,
  conversion_count: number | null;
          conversion_rate: number | null;,
  conversion_type: string | null;
          date: string | null;,
  view_count: number | null;
      daily_page_views: {,
  path: string | null;
      user_metrics: {,
          job_applications: number | null;,
  profile_views: number | null;
          quote_invites: number | null;,
  success_rate: number | null;
          job_applications?: never;
          profile_views?: never;
          quote_invites?: never;
          success_rate?: never;


    Functions: {;,
  check_users_needing_reminders: {;
        Args: Record<PropertyKey never>;


        Args: Record < PropertyKey, never>;
        Returns: undefined;
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
        Returns: string;
      generate_api_key: {,
  Args: { prefix: string }
      generate_fraud_report: {,
  Args: { year: number, month: number }
      generate_referral_code: {,
  Args: { user_id: string }
      get_api_key_user_id: {,
  Args: { key_prefix: string, provided_key: string }
      get_current_tenant_id: {,
        Returns: string;,
  get_current_tenant_id: {;


        Returns: number;
      trigger_resume_scoring: {,
  Args: { application_id: string }
      update_onboarding_milestone: {,
  Args: { _user_id: string, _milestone: string, _status: boolean }
      verify_api_key: {,
  Args: { provided_key: string, stored_hash: string }
        Returns: boolean;
    Enums: {,
  api_key_scope:;"
        | "jobs:read";""
        | "jobs:write";""
        | "talent:read";""
        | "quotes:write";""
        | "webhooks: manage";","
  fraud_severity: "safe" | "suspicious" | "dangerous";""
      fraud_severity: "safe" | "suspicious" | "dangerous";",
  quote_request_status:;"
        | "new";""
        | "in_review";""
        | "accepted";""
        | "responded";""
        | "closed";""
        | "archived";""
      referral_status: "pending" | "completed" | "expired";"
    CompositeTypes: {
      [_ in never]: never;
type DefaultSchema = Database[Extract < keyof Database, "public">];"
export type Tables<;
  DefaultSchemaTableNameOrOptions extends;"
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]);"
    | { schema: keyof Database }
  TableName extends DefaultSchemaTableNameOrOptions extends {
  // TODO: Implement
    schema: keyof Database;
  }"
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;")"
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"]);"
    : never = never;
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }"
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;")"
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {"
  // TODO: Implement
      Row: infer R;
    ? R;
    : never;"
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &;")"
        DefaultSchema["Views"]);""
    ? (DefaultSchema["Tables"] &;")"
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {"
  // TODO: Implement



          date: string;,
          count: number;
        }[]
      hash_api_key: {,
  Args: { api_key: string }
      schedule_email_reminders: {,
  Args: Record<PropertyKey, never>

type DefaultSchema = Database[Extract<keyof Database, "public">]"
</keyof>
export type Tables<
    | { schema: keyof Database };"
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])"
  // TODO: Implement
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &")"
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])"
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }"
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &")"
  // TODO: Implement
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &")"
        DefaultSchema["Views"])""
    ? (DefaultSchema["Tables"] &")"
  // TODO: Implement
      : never;
export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends;
export type TablesInsert<;
    | keyof DefaultSchema["Tables"];"
  // TODO: Implement
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];"
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {"
  // TODO: Implement
      Insert: infer I;
    ? I;
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];""
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {"
  // TODO: Implement

    | keyof DefaultSchema["Tables"]"
  // TODO: Implement
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]"
  // TODO: Implement
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]""
  // TODO: Implement
export type TablesUpdate<
export type TablesUpdate<;
  // TODO: Implement
  // TODO: Implement
      Update: infer U;
    ? U;
  // TODO: Implement

  // TODO: Implement
  // TODO: Implement
  // TODO: Implement
export type Enums<
  DefaultSchemaEnumNameOrOptions extends;
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
  // TODO: Implement
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]"
    : never = never> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }"
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]""
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]""
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]"
export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends;"
    | keyof DefaultSchema["CompositeTypes"];"
    | keyof DefaultSchema["CompositeTypes"]"
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
  // TODO: Implement
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]"
    : never = never> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }"
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]""
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]""
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]"
export const Constants = {
  Enums: {
      api_key_scope: [;"
        "jobs:read";""
        "jobs:write";""
        "talent:read";""
        "quotes: write";",
  api_key_scope: ["
        "quotes:write";"]"
        "webhooks: manage"]","
  fraud_severity: ["safe", "suspicious", "dangerous"];"
      quote_request_status: ["
        "new";""
        "in_review";""
        "accepted";""
        "responded";""
        "closed";"]"
        "archived"]""
      referral_status: ["pending", "completed", "expired"]}}} as const;"
;"
        "jobs:read",""
        "jobs:write",""
        "talent:read",""
        "quotes:write",""
        "webhooks:manage"],""
      fraud_severity: ["safe", "suspicious", "dangerous"],"
        "archived"],""
        "new",""
        "in_review",""
        "accepted",""
        "responded",""
        "closed",""
type DefaultSchema = Database[Extract<keyof Database, "public">];"
    | { schema: keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {;"
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {;"
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;"
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;"

export type Enums<;
  DefaultSchemaEnumNameOrOptions extends;"
    | keyof DefaultSchema["Enums"];"
  // TODO: Implement
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"];"
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }

    | keyof DefaultSchema["Enums"]"
  // TODO: Implement
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName];""
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"];""
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions];"
export type CompositeTypes<;
  // TODO: Implement
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"];"
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }

  // TODO: Implement
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName];""
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"];""
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions];"

      quote_request_status: [;"
;


      api_key_scope: [
]"
      referral_status:"pending" | "completed" | "expired";"
    CompositeTypes:{;
      [_ in never]:never;
    | { schema:keyof Database },;
    schema:keyof Database;
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }"
      Row:infer R;
    :never;"
  :DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &;")"
      :never;
      Insert:infer I;
  :DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];""
      Update:infer U;
  EnumName extends DefaultSchemaEnumNameOrOptions extends {;
    :never = never> = DefaultSchemaEnumNameOrOptions extends { schema:keyof Database }"
  :DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"];""
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {;
    :never = never> = PublicCompositeTypeNameOrOptions extends { schema:keyof Database }"
  :PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"];""
export const Constants = {;
  public: {;,
  Enums:{;
      api_key_scope:[;
  Enums: {;
        "jobs:read",;""
        "jobs:write",;""
        "talent:read",;""
        "quotes:write",;"]"
        "webhooks:manage"],;""
      fraud_severity: ["safe", "suspicious", "dangerous"],;"
        "new",;""
        "in_review",;""
        "accepted",;""
        "responded",;""
        "closed",;"]"
        "archived"];""