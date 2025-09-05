<<<<<<< HEAD
export type Json =;
  | string;
  | number;
  | boolean;
  | null;
  | { [key:string]:Json | undefined }
  | Json[];
;
export type Database = {;
  public:{;
    Tables:{;
      ai_chats:{;
        Row:{;
          created_at:string;
          id:string;
          message:string;
          response:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          id?:string;
          message:string;
          response:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          id?:string;
          message?:string;
          response?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"ai_chats_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      analytics_events:{;
        Row:{;
          created_at:string | null;
          event_type:string;
          id:string;
          metadata:Json | null;
          path:string | null;
          session_id:string | null;
          user_id:string | null;
        }
        Insert:{;
          created_at?:string | null;
          event_type:string;
          id?:string;
          metadata?:Json | null;
          path?:string | null;
          session_id?:string | null;
          user_id?:string | null;
        }
        Update:{;
          created_at?:string | null;
          event_type?:string;
          id?:string;
          metadata?:Json | null;
          path?:string | null;
          session_id?:string | null;
          user_id?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"analytics_events_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      api_keys:{;
        Row:{;
          created_at:string;
          expires_at:string | null;
          id:string;
          is_active:boolean;
          key_hash:string;
          key_prefix:string;
          last_used_at:string | null;
          name:string;
          scopes:Database["public"]["Enums"]["api_key_scope"][];
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          expires_at?:string | null;
          id?:string;
          is_active?:boolean;
          key_hash:string;
          key_prefix:string;
          last_used_at?:string | null;
          name:string;
          scopes?:Database["public"]["Enums"]["api_key_scope"][];
          user_id:string;
        }
        Update:{;
          created_at?:string;
          expires_at?:string | null;
          id?:string;
          is_active?:boolean;
          key_hash?:string;
          key_prefix?:string;
          last_used_at?:string | null;
          name?:string;
          scopes?:Database["public"]["Enums"]["api_key_scope"][];
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"api_keys_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      api_logs:{;
        Row:{;
          api_key_id:string | null;
          created_at:string;
          endpoint:string;
          id:string;
          ip_address:string | null;
          method:string;
          response_time_ms:number | null;
          status_code:number;
          user_agent:string | null;
          user_id:string | null;
        }
        Insert:{;
          api_key_id?:string | null;
          created_at?:string;
          endpoint:string;
          id?:string;
          ip_address?:string | null;
          method:string;
          response_time_ms?:number | null;
          status_code:number;
          user_agent?:string | null;
          user_id?:string | null;
        }
        Update:{;
          api_key_id?:string | null;
          created_at?:string;
          endpoint?:string;
          id?:string;
          ip_address?:string | null;
          method?:string;
          response_time_ms?:number | null;
          status_code?:number;
          user_agent?:string | null;
          user_id?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"api_logs_api_key_id_fkey";
            columns:["api_key_id"];
            isOneToOne:false;
            referencedRelation:"api_keys";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"api_logs_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      certifications:{;
        Row:{;
          created_at:string;
          credential_id:string | null;
          credential_url:string | null;
          expiration_date:string | null;
          id:string;
          issue_date:string | null;
          issuing_organization:string;
          name:string;
          resume_id:string;
        }
        Insert:{;
          created_at?:string;
          credential_id?:string | null;
          credential_url?:string | null;
          expiration_date?:string | null;
          id?:string;
          issue_date?:string | null;
          issuing_organization:string;
          name:string;
          resume_id:string;
        }
        Update:{;
          created_at?:string;
          credential_id?:string | null;
          credential_url?:string | null;
          expiration_date?:string | null;
          id?:string;
          issue_date?:string | null;
          issuing_organization?:string;
          name?:string;
          resume_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"certifications_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          }];
      }
      content:{;
        Row:{;
          content_type:string;
          content_url:string | null;
          created_at:string;
          creator_id:string;
          description:string | null;
          id:string;
          published:boolean | null;
          thumbnail_url:string | null;
          title:string;
          updated_at:string;
          views:number | null;
        }
        Insert:{;
          content_type:string;
          content_url?:string | null;
          created_at?:string;
          creator_id:string;
          description?:string | null;
          id?:string;
          published?:boolean | null;
          thumbnail_url?:string | null;
          title:string;
          updated_at?:string;
          views?:number | null;
        }
        Update:{;
          content_type?:string;
          content_url?:string | null;
          created_at?:string;
          creator_id?:string;
          description?:string | null;
          id?:string;
          published?:boolean | null;
          thumbnail_url?:string | null;
          title?:string;
          updated_at?:string;
          views?:number | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"content_creator_id_fkey";
            columns:["creator_id"];
            isOneToOne:false;
            referencedRelation:"profiles";
            referencedColumns:["id"];
          }];
      }
      contract_templates:{;
        Row:{;
          created_at:string;
          id:string;
          is_default:boolean | null;
          template_data:Json;
          title:string;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          id?:string;
          is_default?:boolean | null;
          template_data:Json;
          title:string;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          id?:string;
          is_default?:boolean | null;
          template_data?:Json;
          title?:string;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"contract_templates_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      education:{;
        Row:{;
          created_at:string;
          degree:string;
          description:string | null;
          end_date:string | null;
          field_of_study:string | null;
          id:string;
          institution:string;
          institution_logo_url:string | null;
          is_current:boolean;
          location:string | null;
          resume_id:string;
          start_date:string;
          updated_at:string;
        }
        Insert:{;
          created_at?:string;
          degree:string;
          description?:string | null;
          end_date?:string | null;
          field_of_study?:string | null;
          id?:string;
          institution:string;
          institution_logo_url?:string | null;
          is_current?:boolean;
          location?:string | null;
          resume_id:string;
          start_date:string;
          updated_at?:string;
        }
        Update:{;
          created_at?:string;
          degree?:string;
          description?:string | null;
          end_date?:string | null;
          field_of_study?:string | null;
          id?:string;
          institution?:string;
          institution_logo_url?:string | null;
          is_current?:boolean;
          location?:string | null;
          resume_id?:string;
          start_date?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"education_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          }];
      }
      fraud_detection_reports:{;
        Row:{;
          action_taken_count:number;
          dangerous_count:number;
          false_positive_count:number;
          generated_at:string;
          id:string;
          report_data:Json | null;
          report_month:string;
          suspicious_count:number;
          total_flags:number;
        }
        Insert:{;
          action_taken_count?:number;
          dangerous_count?:number;
          false_positive_count?:number;
          generated_at?:string;
          id?:string;
          report_data?:Json | null;
          report_month:string;
          suspicious_count?:number;
          total_flags?:number;
        }
        Update:{;
          action_taken_count?:number;
          dangerous_count?:number;
          false_positive_count?:number;
          generated_at?:string;
          id?:string;
          report_data?:Json | null;
          report_month?:string;
          suspicious_count?:number;
          total_flags?:number;
        }
        Relationships:[];
      }
      fraud_flags:{;
        Row:{;
          action_taken:string | null;
          content_excerpt:string;
          content_id:string;
          content_type:string;
          gpt_classification:string | null;
          gpt_explanation:string | null;
          id:string;
          ip_address:string | null;
          is_false_positive:boolean | null;
          reason:string;
          reviewed_at:string | null;
          reviewed_by:string | null;
          severity:Database["public"]["Enums"]["fraud_severity"];
          status:string;
          timestamp:string;
          updated_at:string | null;
          user_email:string | null;
          user_id:string | null;
        }
        Insert:{;
          action_taken?:string | null;
          content_excerpt:string;
          content_id:string;
          content_type:string;
          gpt_classification?:string | null;
          gpt_explanation?:string | null;
          id?:string;
          ip_address?:string | null;
          is_false_positive?:boolean | null;
          reason:string;
          reviewed_at?:string | null;
          reviewed_by?:string | null;
          severity?:Database["public"]["Enums"]["fraud_severity"];
          status?:string;
          timestamp?:string;
          updated_at?:string | null;
          user_email?:string | null;
          user_id?:string | null;
        }
        Update:{;
          action_taken?:string | null;
          content_excerpt?:string;
          content_id?:string;
          content_type?:string;
          gpt_classification?:string | null;
          gpt_explanation?:string | null;
          id?:string;
          ip_address?:string | null;
          is_false_positive?:boolean | null;
          reason?:string;
          reviewed_at?:string | null;
          reviewed_by?:string | null;
          severity?:Database["public"]["Enums"]["fraud_severity"];
          status?:string;
          timestamp?:string;
          updated_at?:string | null;
          user_email?:string | null;
          user_id?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"fraud_flags_reviewed_by_fkey";
            columns:["reviewed_by"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"fraud_flags_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      hire_requests:{;
        Row:{;
          attachments:Json | null;
          budget_display:string | null;
          budget_max:number | null;
          budget_min:number | null;
          created_at:string;
          expiry_date:string | null;
          id:string;
          project_overview:string;
          project_summary:string | null;
          project_type:string | null;
          requester_email:string;
          requester_id:string | null;
          requester_name:string;
          status:string;
          talent_id:string;
          timeline:string;
          updated_at:string;
        }
        Insert:{;
          attachments?:Json | null;
          budget_display?:string | null;
          budget_max?:number | null;
          budget_min?:number | null;
          created_at?:string;
          expiry_date?:string | null;
          id?:string;
          project_overview:string;
          project_summary?:string | null;
          project_type?:string | null;
          requester_email:string;
          requester_id?:string | null;
          requester_name:string;
          status?:string;
          talent_id:string;
          timeline:string;
          updated_at?:string;
        }
        Update:{;
          attachments?:Json | null;
          budget_display?:string | null;
          budget_max?:number | null;
          budget_min?:number | null;
          created_at?:string;
          expiry_date?:string | null;
          id?:string;
          project_overview?:string;
          project_summary?:string | null;
          project_type?:string | null;
          requester_email?:string;
          requester_id?:string | null;
          requester_name?:string;
          status?:string;
          talent_id?:string;
          timeline?:string;
          updated_at?:string;
        }
        Relationships:[];
      }
      interviews:{;
        Row:{;
          client_id:string;
          created_at:string;
          duration_minutes:number;
          end_time:string | null;
          id:string;
          interview_type:string;
          meeting_link:string | null;
          meeting_platform:string | null;
          notes:string | null;
          reminder_sent:string | null;
          scheduled_date:string;
          status:string;
          talent_id:string;
          title:string | null;
          updated_at:string;
        }
        Insert:{;
          client_id:string;
          created_at?:string;
          duration_minutes?:number;
          end_time?:string | null;
          id?:string;
          interview_type?:string;
          meeting_link?:string | null;
          meeting_platform?:string | null;
          notes?:string | null;
          reminder_sent?:string | null;
          scheduled_date:string;
          status?:string;
          talent_id:string;
          title?:string | null;
          updated_at?:string;
        }
        Update:{;
          client_id?:string;
          created_at?:string;
          duration_minutes?:number;
          end_time?:string | null;
          id?:string;
          interview_type?:string;
          meeting_link?:string | null;
          meeting_platform?:string | null;
          notes?:string | null;
          reminder_sent?:string | null;
          scheduled_date?:string;
          status?:string;
          talent_id?:string;
          title?:string | null;
          updated_at?:string;
        }
        Relationships:[];
      }
      job_applications:{;
        Row:{;
          cover_letter:string | null;
          created_at:string | null;
          id:string;
          is_shortlisted:boolean | null;
          job_id:string;
          match_breakdown:Json | null;
          match_score:number | null;
          match_suggestion:string | null;
          match_summary:string | null;
          resume_id:string | null;
          scored_at:string | null;
          status:string;
          talent_id:string;
          viewed_at:string | null;
        }
        Insert:{;
          cover_letter?:string | null;
          created_at?:string | null;
          id?:string;
          is_shortlisted?:boolean | null;
          job_id:string;
          match_breakdown?:Json | null;
          match_score?:number | null;
          match_suggestion?:string | null;
          match_summary?:string | null;
          resume_id?:string | null;
          scored_at?:string | null;
          status?:string;
          talent_id:string;
          viewed_at?:string | null;
        }
        Update:{;
          cover_letter?:string | null;
          created_at?:string | null;
          id?:string;
          is_shortlisted?:boolean | null;
          job_id?:string;
          match_breakdown?:Json | null;
          match_score?:number | null;
          match_suggestion?:string | null;
          match_summary?:string | null;
          resume_id?:string | null;
          scored_at?:string | null;
          status?:string;
          talent_id?:string;
          viewed_at?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"job_applications_job_id_fkey";
            columns:["job_id"];
            isOneToOne:false;
            referencedRelation:"jobs";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"job_applications_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"job_applications_talent_id_fkey";
            columns:["talent_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      jobs:{;
        Row:{;
          budget:Json;
          category:string;
          client_id:string;
          created_at:string;
          deadline:string | null;
          description:string;
          id:string;
          skills:string[];
          status:string;
          title:string;
          updated_at:string;
        }
        Insert:{;
          budget?:Json;
          category:string;
          client_id:string;
          created_at?:string;
          deadline?:string | null;
          description:string;
          id?:string;
          skills?:string[];
          status?:string;
          title:string;
          updated_at?:string;
        }
        Update:{;
          budget?:Json;
          category?:string;
          client_id?:string;
          created_at?:string;
          deadline?:string | null;
          description?:string;
          id?:string;
          skills?:string[];
          status?:string;
          title?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"jobs_client_id_fkey";
            columns:["client_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      milestone_activities:{;
        Row:{;
          action:string;
          comment:string | null;
          created_at:string;
          id:string;
          milestone_id:string;
          new_status:string;
          previous_status:string | null;
          user_id:string;
        }
        Insert:{;
          action:string;
          comment?:string | null;
          created_at?:string;
          id?:string;
          milestone_id:string;
          new_status:string;
          previous_status?:string | null;
          user_id:string;
        }
        Update:{;
          action?:string;
          comment?:string | null;
          created_at?:string;
          id?:string;
          milestone_id?:string;
          new_status?:string;
          previous_status?:string | null;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"milestone_activities_milestone_id_fkey";
            columns:["milestone_id"];
            isOneToOne:false;
            referencedRelation:"project_milestones";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"milestone_activities_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      notification_preferences:{;
        Row:{;
          created_at:string;
          id:string;
          marketing_emails:boolean | null;
          system_notifications:boolean | null;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          id?:string;
          marketing_emails?:boolean | null;
          system_notifications?:boolean | null;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          id?:string;
          marketing_emails?:boolean | null;
          system_notifications?:boolean | null;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"notification_preferences_user_id_fkey";
            columns:["user_id"];
            isOneToOne:true;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      notifications:{;
        Row:{;
          created_at:string | null;
          id:string;
          message:string;
          read:boolean | null;
          related_id:string | null;
          title:string;
          type:string;
          updated_at:string | null;
          user_id:string;
        }
        Insert:{;
          created_at?:string | null;
          id?:string;
          message:string;
          read?:boolean | null;
          related_id?:string | null;
          title:string;
          type:string;
          updated_at?:string | null;
          user_id:string;
        }
        Update:{;
          created_at?:string | null;
          id?:string;
          message?:string;
          read?:boolean | null;
          related_id?:string | null;
          title?:string;
          type?:string;
          updated_at?:string | null;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"notifications_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      partner_payouts:{;
        Row:{;
          amount:number;
          completed_at:string | null;
          created_at:string;
          id:string;
          method:string;
          partner_id:string;
          payout_details:Json | null;
          status:string;
          updated_at:string;
        }
        Insert:{;
          amount:number;
          completed_at?:string | null;
          created_at?:string;
          id?:string;
          method:string;
          partner_id:string;
          payout_details?:Json | null;
          status?:string;
          updated_at?:string;
        }
        Update:{;
          amount?:number;
          completed_at?:string | null;
          created_at?:string;
          id?:string;
          method?:string;
          partner_id?:string;
          payout_details?:Json | null;
          status?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"partner_payouts_partner_id_fkey";
            columns:["partner_id"];
            isOneToOne:false;
            referencedRelation:"partner_profiles";
            referencedColumns:["id"];
          }];
      }
      partner_profiles:{;
        Row:{;
          audience_size:string;
          bio:string;
          commission_rate:number | null;
          created_at:string;
          fraud_flags:number | null;
          id:string;
          name:string;
          niche:string;
          payout_method:string;
          social_media:Json | null;
          status:string;
          updated_at:string;
          user_id:string;
          website:string | null;
        }
        Insert:{;
          audience_size:string;
          bio:string;
          commission_rate?:number | null;
          created_at?:string;
          fraud_flags?:number | null;
          id?:string;
          name:string;
          niche:string;
          payout_method:string;
          social_media?:Json | null;
          status?:string;
          updated_at?:string;
          user_id:string;
          website?:string | null;
        }
        Update:{;
          audience_size?:string;
          bio?:string;
          commission_rate?:number | null;
          created_at?:string;
          fraud_flags?:number | null;
          id?:string;
          name?:string;
          niche?:string;
          payout_method?:string;
          social_media?:Json | null;
          status?:string;
          updated_at?:string;
          user_id?:string;
          website?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"partner_profiles_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      partner_referral_links:{;
        Row:{;
          campaign:string | null;
          clicks:number | null;
          conversions:number | null;
          created_at:string;
          id:string;
          name:string;
          partner_id:string;
          source:string | null;
          updated_at:string;
        }
        Insert:{;
          campaign?:string | null;
          clicks?:number | null;
          conversions?:number | null;
          created_at?:string;
          id?:string;
          name:string;
          partner_id:string;
          source?:string | null;
          updated_at?:string;
        }
        Update:{;
          campaign?:string | null;
          clicks?:number | null;
          conversions?:number | null;
          created_at?:string;
          id?:string;
          name?:string;
          partner_id?:string;
          source?:string | null;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"partner_referral_links_partner_id_fkey";
            columns:["partner_id"];
            isOneToOne:false;
            referencedRelation:"partner_profiles";
            referencedColumns:["id"];
          }];
      }
      portfolio_projects:{;
        Row:{;
          created_at:string;
          demo_url:string | null;
          description:string | null;
          github_url:string | null;
          id:string;
          image_url:string | null;
          pdf_url:string | null;
          technologies:string[] | null;
          title:string;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          demo_url?:string | null;
          description?:string | null;
          github_url?:string | null;
          id?:string;
          image_url?:string | null;
          pdf_url?:string | null;
          technologies?:string[] | null;
          title:string;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          demo_url?:string | null;
          description?:string | null;
          github_url?:string | null;
          id?:string;
          image_url?:string | null;
          pdf_url?:string | null;
          technologies?:string[] | null;
          title?:string;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"portfolio_projects_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      profiles:{;
        Row:{;
          avatar_url:string | null;
          average_rating:number | null;
          bio:string | null;
          created_at:string;
          display_name:string | null;
          headline:string | null;
          id:string;
          ip_address:string | null;
          last_login_ip:string | null;
          profile_complete:boolean;
          rating_count:number | null;
          rating_sum:number | null;
          role:string | null;
          signup_timestamp:string | null;
          tenant_id:string | null;
          updated_at:string;
          user_type:string | null;
        }
        Insert:{;
          avatar_url?:string | null;
          average_rating?:number | null;
          bio?:string | null;
          created_at?:string;
          display_name?:string | null;
          headline?:string | null;
          id:string;
          ip_address?:string | null;
          last_login_ip?:string | null;
          profile_complete?:boolean;
          rating_count?:number | null;
          rating_sum?:number | null;
          role?:string | null;
          signup_timestamp?:string | null;
          tenant_id?:string | null;
          updated_at?:string;
          user_type?:string | null;
        }
        Update:{;
          avatar_url?:string | null;
          average_rating?:number | null;
          bio?:string | null;
          created_at?:string;
          display_name?:string | null;
          headline?:string | null;
          id?:string;
          ip_address?:string | null;
          last_login_ip?:string | null;
          profile_complete?:boolean;
          rating_count?:number | null;
          rating_sum?:number | null;
          role?:string | null;
          signup_timestamp?:string | null;
          tenant_id?:string | null;
          updated_at?:string;
          user_type?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"profiles_id_fkey";
            columns:["id"];
            isOneToOne:true;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"profiles_tenant_id_fkey";
            columns:["tenant_id"];
            isOneToOne:false;
            referencedRelation:"whitelabel_tenants";
            referencedColumns:["id"];
          }];
      }
      project_milestones:{;
        Row:{;
          amount:number;
          created_at:string;
          created_by:string;
          deliverables:Json | null;
          description:string | null;
          due_date:string | null;
          id:string;
          project_id:string;
          status:string;
          title:string;
          updated_at:string;
        }
        Insert:{;
          amount:number;
          created_at?:string;
          created_by:string;
          deliverables?:Json | null;
          description?:string | null;
          due_date?:string | null;
          id?:string;
          project_id:string;
          status?:string;
          title:string;
          updated_at?:string;
        }
        Update:{;
          amount?:number;
          created_at?:string;
          created_by?:string;
          deliverables?:Json | null;
          description?:string | null;
          due_date?:string | null;
          id?:string;
          project_id?:string;
          status?:string;
          title?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"project_milestones_created_by_fkey";
            columns:["created_by"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"project_milestones_project_id_fkey";
            columns:["project_id"];
            isOneToOne:false;
            referencedRelation:"projects";
            referencedColumns:["id"];
          }];
      }
      project_notes:{;
        Row:{;
          content:string;
          created_at:string;
          id:string;
          project_id:string;
          user_id:string;
        }
        Insert:{;
          content:string;
          created_at?:string;
          id?:string;
          project_id:string;
          user_id:string;
        }
        Update:{;
          content?:string;
          created_at?:string;
          id?:string;
          project_id?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"project_notes_project_id_fkey";
            columns:["project_id"];
            isOneToOne:false;
            referencedRelation:"projects";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"project_notes_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      projects:{;
        Row:{;
          agreement_url:string | null;
          client_id:string;
          created_at:string;
          id:string;
          job_id:string;
          payment_terms:string;
          scope_summary:string;
          start_date:string;
          status:string;
          talent_id:string;
          updated_at:string;
        }
        Insert:{;
          agreement_url?:string | null;
          client_id:string;
          created_at?:string;
          id?:string;
          job_id:string;
          payment_terms:string;
          scope_summary:string;
          start_date:string;
          status?:string;
          talent_id:string;
          updated_at?:string;
        }
        Update:{;
          agreement_url?:string | null;
          client_id?:string;
          created_at?:string;
          id?:string;
          job_id?:string;
          payment_terms?:string;
          scope_summary?:string;
          start_date?:string;
          status?:string;
          talent_id?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"projects_client_id_fkey";
            columns:["client_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"projects_job_id_fkey";
            columns:["job_id"];
            isOneToOne:false;
            referencedRelation:"jobs";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"projects_talent_id_fkey";
            columns:["talent_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      quote_requests:{;
        Row:{;
          budget_display:string | null;
          budget_max:number | null;
          budget_min:number | null;
          created_at:string;
          id:string;
          is_archived:boolean;
          project_description:string | null;
          project_name:string;
          project_summary:string;
          replied_at:string | null;
          requester_email:string;
          requester_id:string | null;
          requester_name:string;
          start_date:string | null;
          status:Database["public"]["Enums"]["quote_request_status"];
          talent_id:string | null;
          timeline:string;
          updated_at:string;
          viewed_at:string | null;
        }
        Insert:{;
          budget_display?:string | null;
          budget_max?:number | null;
          budget_min?:number | null;
          created_at?:string;
          id?:string;
          is_archived?:boolean;
          project_description?:string | null;
          project_name:string;
          project_summary:string;
          replied_at?:string | null;
          requester_email:string;
          requester_id?:string | null;
          requester_name:string;
          start_date?:string | null;
          status?:Database["public"]["Enums"]["quote_request_status"];
          talent_id?:string | null;
          timeline:string;
          updated_at?:string;
          viewed_at?:string | null;
        }
        Update:{;
          budget_display?:string | null;
          budget_max?:number | null;
          budget_min?:number | null;
          created_at?:string;
          id?:string;
          is_archived?:boolean;
          project_description?:string | null;
          project_name?:string;
          project_summary?:string;
          replied_at?:string | null;
          requester_email?:string;
          requester_id?:string | null;
          requester_name?:string;
          start_date?:string | null;
          status?:Database["public"]["Enums"]["quote_request_status"];
          talent_id?:string | null;
          timeline?:string;
          updated_at?:string;
          viewed_at?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"quote_requests_requester_id_fkey";
            columns:["requester_id"];
            isOneToOne:false;
            referencedRelation:"profiles";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"quote_requests_talent_id_fkey";
            columns:["talent_id"];
            isOneToOne:false;
            referencedRelation:"profiles";
            referencedColumns:["id"];
          }];
      }
      referral_codes:{;
        Row:{;
          code:string;
          created_at:string;
          id:string;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          code:string;
          created_at?:string;
          id?:string;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          code?:string;
          created_at?:string;
          id?:string;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"referral_codes_user_id_fkey";
            columns:["user_id"];
            isOneToOne:true;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      referral_rewards:{;
        Row:{;
          amount:number | null;
          created_at:string;
          expires_at:string | null;
          id:string;
          partner_id:string | null;
          referral_id:string;
          reward_type:string;
          user_id:string;
        }
        Insert:{;
          amount?:number | null;
          created_at?:string;
          expires_at?:string | null;
          id?:string;
          partner_id?:string | null;
          referral_id:string;
          reward_type:string;
          user_id:string;
        }
        Update:{;
          amount?:number | null;
          created_at?:string;
          expires_at?:string | null;
          id?:string;
          partner_id?:string | null;
          referral_id?:string;
          reward_type?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"referral_rewards_partner_id_fkey";
            columns:["partner_id"];
            isOneToOne:false;
            referencedRelation:"partner_profiles";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"referral_rewards_referral_id_fkey";
            columns:["referral_id"];
            isOneToOne:false;
            referencedRelation:"referrals";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"referral_rewards_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      referrals:{;
        Row:{;
          completed_at:string | null;
          created_at:string;
          email:string | null;
          id:string;
          ip_address:string | null;
          partner_id:string | null;
          referral_code:string;
          referred_id:string | null;
          referred_user_type:string | null;
          referrer_id:string;
          referrer_user_type:string | null;
          reward_issued:boolean;
          reward_issued_at:string | null;
          status:Database["public"]["Enums"]["referral_status"];
        }
        Insert:{;
          completed_at?:string | null;
          created_at?:string;
          email?:string | null;
          id?:string;
          ip_address?:string | null;
          partner_id?:string | null;
          referral_code:string;
          referred_id?:string | null;
          referred_user_type?:string | null;
          referrer_id:string;
          referrer_user_type?:string | null;
          reward_issued?:boolean;
          reward_issued_at?:string | null;
          status?:Database["public"]["Enums"]["referral_status"];
        }
        Update:{;
          completed_at?:string | null;
          created_at?:string;
          email?:string | null;
          id?:string;
          ip_address?:string | null;
          partner_id?:string | null;
          referral_code?:string;
          referred_id?:string | null;
          referred_user_type?:string | null;
          referrer_id?:string;
          referrer_user_type?:string | null;
          reward_issued?:boolean;
          reward_issued_at?:string | null;
          status?:Database["public"]["Enums"]["referral_status"];
        }
        Relationships:[;
          {;
            foreignKeyName:"referrals_partner_id_fkey";
            columns:["partner_id"];
            isOneToOne:false;
            referencedRelation:"partner_profiles";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"referrals_referral_code_fkey";
            columns:["referral_code"];
            isOneToOne:false;
            referencedRelation:"referral_codes";
            referencedColumns:["code"];
          },;
          {;
            foreignKeyName:"referrals_referred_id_fkey";
            columns:["referred_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"referrals_referrer_id_fkey";
            columns:["referrer_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      reminder_logs:{;
        Row:{;
          clicked_at:string | null;
          email_body:string;
          email_subject:string;
          id:string;
          opened_at:string | null;
          reminder_type:string;
          sent_at:string | null;
          user_id:string;
        }
        Insert:{;
          clicked_at?:string | null;
          email_body:string;
          email_subject:string;
          id?:string;
          opened_at?:string | null;
          reminder_type:string;
          sent_at?:string | null;
          user_id:string;
        }
        Update:{;
          clicked_at?:string | null;
          email_body?:string;
          email_subject?:string;
          id?:string;
          opened_at?:string | null;
          reminder_type?:string;
          sent_at?:string | null;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"reminder_logs_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      resume_skills:{;
        Row:{;
          category:string | null;
          created_at:string;
          id:string;
          name:string;
          proficiency:number | null;
          resume_id:string;
          years_experience:number | null;
        }
        Insert:{;
          category?:string | null;
          created_at?:string;
          id?:string;
          name:string;
          proficiency?:number | null;
          resume_id:string;
          years_experience?:number | null;
        }
        Update:{;
          category?:string | null;
          created_at?:string;
          id?:string;
          name?:string;
          proficiency?:number | null;
          resume_id?:string;
          years_experience?:number | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"resume_skills_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          }];
      }
      review_reports:{;
        Row:{;
          created_at:string;
          id:string;
          reason:string;
          reporter_id:string;
          resolved_at:string | null;
          review_id:string;
          status:string;
        }
        Insert:{;
          created_at?:string;
          id?:string;
          reason:string;
          reporter_id:string;
          resolved_at?:string | null;
          review_id:string;
          status?:string;
        }
        Update:{;
          created_at?:string;
          id?:string;
          reason?:string;
          reporter_id?:string;
          resolved_at?:string | null;
          review_id?:string;
          status?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"review_reports_reporter_id_fkey";
            columns:["reporter_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"review_reports_review_id_fkey";
            columns:["review_id"];
            isOneToOne:false;
            referencedRelation:"reviews";
            referencedColumns:["id"];
          }];
      }
      reviews:{;
        Row:{;
          communication_rating:number | null;
          created_at:string;
          id:string;
          is_anonymous:boolean;
          is_visible:boolean;
          project_id:string;
          quality_rating:number | null;
          rating:number;
          report_count:number;
          review_text:string;
          reviewee_id:string;
          reviewer_id:string;
          status:string;
          timeliness_rating:number | null;
          updated_at:string;
          would_work_again:boolean | null;
        }
        Insert:{;
          communication_rating?:number | null;
          created_at?:string;
          id?:string;
          is_anonymous?:boolean;
          is_visible?:boolean;
          project_id:string;
          quality_rating?:number | null;
          rating:number;
          report_count?:number;
          review_text:string;
          reviewee_id:string;
          reviewer_id:string;
          status?:string;
          timeliness_rating?:number | null;
          updated_at?:string;
          would_work_again?:boolean | null;
        }
        Update:{;
          communication_rating?:number | null;
          created_at?:string;
          id?:string;
          is_anonymous?:boolean;
          is_visible?:boolean;
          project_id?:string;
          quality_rating?:number | null;
          rating?:number;
          report_count?:number;
          review_text?:string;
          reviewee_id?:string;
          reviewer_id?:string;
          status?:string;
          timeliness_rating?:number | null;
          updated_at?:string;
          would_work_again?:boolean | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"reviews_project_id_fkey";
            columns:["project_id"];
            isOneToOne:false;
            referencedRelation:"projects";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"reviews_reviewee_id_fkey";
            columns:["reviewee_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"reviews_reviewer_id_fkey";
            columns:["reviewer_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      scheduled_jobs:{;
        Row:{;
          completed_at:string | null;
          created_at:string;
          id:string;
          job_type:string;
          payload:Json | null;
          scheduled_for:string;
          status:string;
          updated_at:string;
        }
        Insert:{;
          completed_at?:string | null;
          created_at?:string;
          id?:string;
          job_type:string;
          payload?:Json | null;
          scheduled_for:string;
          status:string;
          updated_at?:string;
        }
        Update:{;
          completed_at?:string | null;
          created_at?:string;
          id?:string;
          job_type?:string;
          payload?:Json | null;
          scheduled_for?:string;
          status?:string;
          updated_at?:string;
        }
        Relationships:[];
      }
      subscriptions:{;
        Row:{;
          created_at:string;
          current_period_end:string | null;
          current_period_start:string | null;
          id:string;
          plan_type:string;
          status:string;
          stripe_customer_id:string | null;
          stripe_subscription_id:string | null;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          current_period_end?:string | null;
          current_period_start?:string | null;
          id?:string;
          plan_type:string;
          status:string;
          stripe_customer_id?:string | null;
          stripe_subscription_id?:string | null;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          current_period_end?:string | null;
          current_period_start?:string | null;
          id?:string;
          plan_type?:string;
          status?:string;
          stripe_customer_id?:string | null;
          stripe_subscription_id?:string | null;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"subscriptions_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      talent_resumes:{;
        Row:{;
          created_at:string;
          headline:string | null;
          id:string;
          is_active:boolean;
          summary:string | null;
          title:string;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          headline?:string | null;
          id?:string;
          is_active?:boolean;
          summary?:string | null;
          title?:string;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          headline?:string | null;
          id?:string;
          is_active?:boolean;
          summary?:string | null;
          title?:string;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"talent_resumes_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      tenant_administrators:{;
        Row:{;
          created_at:string | null;
          id:string;
          tenant_id:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string | null;
          id?:string;
          tenant_id:string;
          user_id:string;
        }
        Update:{;
          created_at?:string | null;
          id?:string;
          tenant_id?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"tenant_administrators_tenant_id_fkey";
            columns:["tenant_id"];
            isOneToOne:false;
            referencedRelation:"whitelabel_tenants";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"tenant_administrators_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      user_onboarding:{;
        Row:{;
          application_sent:boolean | null;
          application_sent_at:string | null;
          availability_set:boolean | null;
          availability_set_at:string | null;
          created_at:string;
          id:string;
          job_posted:boolean | null;
          job_posted_at:string | null;
          last_reminder_sent:string | null;
          match_received:boolean | null;
          match_received_at:string | null;
          match_viewed:boolean | null;
          match_viewed_at:string | null;
          profile_completed:boolean | null;
          profile_completed_at:string | null;
          quote_received:boolean | null;
          quote_received_at:string | null;
          reminder_count:number | null;
          role:string;
          skills_added:boolean | null;
          skills_added_at:string | null;
          talent_invited:boolean | null;
          talent_invited_at:string | null;
          updated_at:string;
          user_id:string | null;
        }
        Insert:{;
          application_sent?:boolean | null;
          application_sent_at?:string | null;
          availability_set?:boolean | null;
          availability_set_at?:string | null;
          created_at?:string;
          id?:string;
          job_posted?:boolean | null;
          job_posted_at?:string | null;
          last_reminder_sent?:string | null;
          match_received?:boolean | null;
          match_received_at?:string | null;
          match_viewed?:boolean | null;
          match_viewed_at?:string | null;
          profile_completed?:boolean | null;
          profile_completed_at?:string | null;
          quote_received?:boolean | null;
          quote_received_at?:string | null;
          reminder_count?:number | null;
          role:string;
          skills_added?:boolean | null;
          skills_added_at?:string | null;
          talent_invited?:boolean | null;
          talent_invited_at?:string | null;
          updated_at?:string;
          user_id?:string | null;
        }
        Update:{;
          application_sent?:boolean | null;
          application_sent_at?:string | null;
          availability_set?:boolean | null;
          availability_set_at?:string | null;
          created_at?:string;
          id?:string;
          job_posted?:boolean | null;
          job_posted_at?:string | null;
          last_reminder_sent?:string | null;
          match_received?:boolean | null;
          match_received_at?:string | null;
          match_viewed?:boolean | null;
          match_viewed_at?:string | null;
          profile_completed?:boolean | null;
          profile_completed_at?:string | null;
          quote_received?:boolean | null;
          quote_received_at?:string | null;
          reminder_count?:number | null;
          role?:string;
          skills_added?:boolean | null;
          skills_added_at?:string | null;
          talent_invited?:boolean | null;
          talent_invited_at?:string | null;
          updated_at?:string;
          user_id?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"user_onboarding_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      user_privacy_settings:{;
        Row:{;
          activity_monitoring_enabled:boolean | null;
          ai_analysis_enabled:boolean | null;
          id:string;
          message_scanning_enabled:boolean | null;
          updated_at:string | null;
        }
        Insert:{;
          activity_monitoring_enabled?:boolean | null;
          ai_analysis_enabled?:boolean | null;
          id:string;
          message_scanning_enabled?:boolean | null;
          updated_at?:string | null;
        }
        Update:{;
          activity_monitoring_enabled?:boolean | null;
          ai_analysis_enabled?:boolean | null;
          id?:string;
          message_scanning_enabled?:boolean | null;
          updated_at?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"user_privacy_settings_id_fkey";
            columns:["id"];
            isOneToOne:true;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      webhook_configs:{;
        Row:{;
          created_at:string;
          event_types:string[];
          id:string;
          is_active:boolean;
          last_triggered_at:string | null;
          name:string;
          secret:string | null;
          updated_at:string;
          url:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          event_types:string[];
          id?:string;
          is_active?:boolean;
          last_triggered_at?:string | null;
          name:string;
          secret?:string | null;
          updated_at?:string;
          url:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          event_types?:string[];
          id?:string;
          is_active?:boolean;
          last_triggered_at?:string | null;
          name?:string;
          secret?:string | null;
          updated_at?:string;
          url?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"webhook_configs_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      whitelabel_tenants:{;
        Row:{;
          account_manager_id:string | null;
          brand_name:string;
          created_at:string | null;
          custom_domain:string | null;
          dns_verified:boolean;
          email_template_override:Json | null;
          id:string;
          is_active:boolean;
          landing_page_copy:Json | null;
          logo_url:string | null;
          primary_color:string;
          subdomain:string;
          theme_preset:string;
          updated_at:string | null;
        }
        Insert:{;
          account_manager_id?:string | null;
          brand_name:string;
          created_at?:string | null;
          custom_domain?:string | null;
          dns_verified?:boolean;
          email_template_override?:Json | null;
          id?:string;
          is_active?:boolean;
          landing_page_copy?:Json | null;
          logo_url?:string | null;
          primary_color?:string;
          subdomain:string;
          theme_preset?:string;
          updated_at?:string | null;
        }
        Update:{;
          account_manager_id?:string | null;
          brand_name?:string;
          created_at?:string | null;
          custom_domain?:string | null;
          dns_verified?:boolean;
          email_template_override?:Json | null;
          id?:string;
          is_active?:boolean;
          landing_page_copy?:Json | null;
          logo_url?:string | null;
          primary_color?:string;
          subdomain?:string;
          theme_preset?:string;
          updated_at?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"whitelabel_tenants_account_manager_id_fkey";
            columns:["account_manager_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      work_history:{;
        Row:{;
          company_logo_url:string | null;
          company_name:string;
          created_at:string;
          description:string | null;
          end_date:string | null;
          id:string;
          is_current:boolean;
          location:string | null;
          resume_id:string;
          role_title:string;
          start_date:string;
          updated_at:string;
        }
        Insert:{;
          company_logo_url?:string | null;
          company_name:string;
          created_at?:string;
          description?:string | null;
          end_date?:string | null;
          id?:string;
          is_current?:boolean;
          location?:string | null;
          resume_id:string;
          role_title:string;
          start_date:string;
          updated_at?:string;
        }
        Update:{;
          company_logo_url?:string | null;
          company_name?:string;
          created_at?:string;
          description?:string | null;
          end_date?:string | null;
          id?:string;
          is_current?:boolean;
          location?:string | null;
          resume_id?:string;
          role_title?:string;
          start_date?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"work_history_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          }];
      }
    }
    Views:{;
      conversion_rates:{;
        Row:{;
          conversion_count:number | null;
          conversion_rate:number | null;
          conversion_type:string | null;
          date:string | null;
          view_count:number | null;
        }
        Relationships:[];
      }
      daily_page_views:{;
        Row:{;
          date:string | null;
          path:string | null;
          view_count:number | null;
        }
        Relationships:[];
      }
      user_metrics:{;
        Row:{;
          job_applications:number | null;
          profile_views:number | null;
          quote_invites:number | null;
          success_rate:number | null;
          user_id:string | null;
        }
        Insert:{;
          job_applications?:never;
          profile_views?:never;
          quote_invites?:never;
          success_rate?:never;
          user_id?:string | null;
        }
        Update:{;
          job_applications?:never;
          profile_views?:never;
          quote_invites?:never;
          success_rate?:never;
          user_id?:string | null;
        }
        Relationships:[];
      }
    }
    Functions:{;
      check_users_needing_reminders:{;
        Args:Record<PropertyKey never>;
        Returns:{;
          user_id:string;
          email:string;
          display_name:string;
          user_type:string;
          last_login:string;
          reminder_type:string;
          days_since_login:number;
          onboarding_status:Json;
        }[];
      }
      complete_referral:{;
        Args:{ _referred_id:string, _user_type:string }
        Returns:undefined;
      }
      create_notification:{;
        Args:{;
          _user_id:string;
          _title:string;
          _message:string;
          _type:string;
          _related_id?:string;
        }
        Returns:string;
      }
      create_scheduled_reminders:{;
        Args:Record<PropertyKey never>;
        Returns:undefined;
      }
      flag_suspicious_content:{;
        Args:{;
          p_user_id:string;
          p_user_email:string;
          p_content_type:string;
          p_content_id:string;
          p_content_excerpt:string;
          p_severity:string;
          p_reason:string;
          p_ip_address:string;
        }
        Returns:string;
      }
      generate_api_key:{;
        Args:{ prefix:string }
        Returns:string;
      }
      generate_fraud_report:{;
        Args:{ year:number, month:number }
        Returns:string;
      }
      generate_referral_code:{;
        Args:{ user_id:string }
        Returns:string;
      }
      get_api_key_user_id:{;
        Args:{ key_prefix:string, provided_key:string }
        Returns:string;
      }
      get_current_tenant_id:{;
        Args:Record<PropertyKey never>;
        Returns:string;
      }
      get_event_distribution:{;
        Args:{ days_back?:number }
        Returns:{;
          date:string;
          event_type:string;
          count:number;
        }[];
      }
      hash_api_key:{;
        Args:{ api_key:string }
        Returns:string;
      }
      schedule_email_reminders:{;
        Args:Record<PropertyKey never>;
        Returns:number;
      }
      trigger_resume_scoring:{;
        Args:{ application_id:string }
        Returns:undefined;
      }
      update_onboarding_milestone:{;
        Args:{ _user_id:string, _milestone:string, _status:boolean }
        Returns:undefined;
      }
      verify_api_key:{;
        Args:{ provided_key:string, stored_hash:string }
        Returns:boolean;
      }
    }
    Enums:{;
      api_key_scope:;
        | "jobs:read";
        | "jobs:write";
        | "talent:read";
        | "quotes:write";
        | "webhooks:manage";
      fraud_severity:"safe" | "suspicious" | "dangerous";
      quote_request_status:;
        | "new";
        | "in_review";
        | "accepted";
        | "responded";
        | "closed";
        | "archived";
      referral_status:"pending" | "completed" | "expired";
    }
    CompositeTypes:{;
      [_ in never]:never;
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
        Row:infer R;
      }
      ? R;
      :never;
    :never;
;
export type TablesInsert<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Insert:infer I;
    }
    ? I;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Insert:infer I;
      }
      ? I;
      :never;
    :never;
;
export type TablesUpdate<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Update:infer U;
    }
    ? U;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Update:infer U;
      }
      ? U;
      :never;
    :never;
;
export type Enums<;
  DefaultSchemaEnumNameOrOptions extends;
    | keyof DefaultSchema["Enums"];
    | { schema:keyof Database },;
  EnumName extends DefaultSchemaEnumNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"];
    :never = never> = DefaultSchemaEnumNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName];
  :DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"];
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions];
    :never;
;
export type CompositeTypes<;
  PublicCompositeTypeNameOrOptions extends;
    | keyof DefaultSchema["CompositeTypes"];
    | { schema:keyof Database },;
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"];
    :never = never> = PublicCompositeTypeNameOrOptions extends { schema:keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName];
  :PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"];
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions];
    :never;
;
export const Constants = {;
  public:{;
    Enums:{;
      api_key_scope:[;
        "jobs:read",;
        "jobs:write",;
        "talent:read",;
        "quotes:write",;
        "webhooks:manage"],;
      fraud_severity:["safe", "suspicious", "dangerous"],;
      quote_request_status:[;
        "new",;
        "in_review",;
        "accepted",;
        "responded",;
        "closed",;
        "archived"],;
      referral_status:["pending", "completed", "expired"]}}} as const;
=======
export type Json =
  | string
  | number
  | boolean
  | null
  | {_[key: string]: Json | undefined}
  | Json[]

export type Database = {public: {
    Tables: {
      aichats: {
        Row: {
          createdat: string,
id: string,
message: string,
response: string,
userid: string}
        Insert: {created_at?: string,
id?: string,
message: string,
response: string,
userid: string}
        Update: {created_at?: string,
id?: string,
message?: string,
response?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;aichats_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      analyticsevents: {Row: {
          createdat: string | null,
eventtype: string,
id: string,
metadata: Json | null,
path: string | null,
sessionid: string | null,
userid: string | null}
        Insert: {created_at?: string | null,
eventtype: string,
id?: string,
metadata?: Json | null,
path?: string | null,
sessionid?: string | null,
userid?: string | null}
        Update: {created_at?: string | null,
eventtype?: string,
id?: string,
metadata?: Json | null,
path?: string | null,
sessionid?: string | null,
userid?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;analyticsevents_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      apikeys: {Row: {
          createdat: string,
expiresat: string | null,
id: string,
isactive: boolean,
keyhash: string,
keyprefix: string,
lastused_at: string | null,
name: string,
scopes: Database[&quot;public&quot][&quot;Enums&quot][&quot;apikey_scope&quot][]
          userid: string
        }
        Insert: {
          createdat?: string          expiresat?: string | null,
id?: string,
isactive?: boolean,
keyhash: string,
keyprefix: string,
lastused_at?: string | null,
name: string,
scopes?: Database[&quot;public&quot][&quot;Enums&quot][&quot;apikey_scope&quot][]
          userid: string
        }
        Update: {
          createdat?: string          expiresat?: string | null,
id?: string,
isactive?: boolean,
keyhash?: string,
keyprefix?: string,
lastused_at?: string | null,
name?: string,
scopes?: Database[&quot;public&quot][&quot;Enums&quot][&quot;apikey_scope&quot][]
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: &quot;apikeys_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      apilogs: {Row: {
          apikey_id: string | null,
createdat: string,
endpoint: string,
id: string,
ipaddress: string | null,
method: string,
responsetime_ms: number | null,
statuscode: number,
useragent: string | null,
userid: string | null}
        Insert: {api_key_id?: string | null,
createdat?: string,
endpoint: string,
id?: string,
ipaddress?: string | null,
method: string,
responsetime_ms?: number | null,
statuscode: number,
useragent?: string | null,
userid?: string | null}
        Update: {api_key_id?: string | null,
createdat?: string,
endpoint?: string,
id?: string,
ipaddress?: string | null,
method?: string,
responsetime_ms?: number | null,
statuscode?: number,
useragent?: string | null,
userid?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;apilogs_api_key_id_fkey&quot;
            columns: [&quot;apikey_id&quot]
            isOneToOne: false,
referencedRelation: &quot;apikeys&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;apilogs_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      certifications: {Row: {
          createdat: string,
credentialid: string | null,
credentialurl: string | null,
expirationdate: string | null,
id: string,
issuedate: string | null,
issuingorganization: string,
name: string,
resumeid: string}
        Insert: {created_at?: string,
credentialid?: string | null,
credentialurl?: string | null,
expirationdate?: string | null,
id?: string,
issuedate?: string | null,
issuingorganization: string,
name: string,
resumeid: string}
        Update: {created_at?: string,
credentialid?: string | null,
credentialurl?: string | null,
expirationdate?: string | null,
id?: string,
issuedate?: string | null,
issuingorganization?: string,
name?: string,
resumeid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;certificationsresume_id_fkey&quot;
            columns: [&quot;resumeid&quot]
            isOneToOne: false,
referencedRelation: &quot;talentresumes&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      content: {Row: {
          contenttype: string,
contenturl: string | null,
createdat: string,
creatorid: string,
description: string | null,
id: string,
published: boolean | null,
thumbnailurl: string | null,
title: string,
updatedat: string,
views: number | null}
        Insert: {content_type: string,
contenturl?: string | null,
createdat?: string,
creatorid: string,
description?: string | null,
id?: string,
published?: boolean | null,
thumbnailurl?: string | null,
title: string,
updatedat?: string,
views?: number | null}
        Update: {content_type?: string,
contenturl?: string | null,
createdat?: string,
creatorid?: string,
description?: string | null,
id?: string,
published?: boolean | null,
thumbnailurl?: string | null,
title?: string,
updatedat?: string,
views?: number | null}
        Relationships: [
          {
            foreignKeyName: &quot;contentcreator_id_fkey&quot;
            columns: [&quot;creatorid&quot]
            isOneToOne: false,
referencedRelation: &quot;profiles&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      contracttemplates: {Row: {
          createdat: string,
id: string,
isdefault: boolean | null,
templatedata: Json,
title: string,
updatedat: string,
userid: string}
        Insert: {created_at?: string,
id?: string,
isdefault?: boolean | null,
templatedata: Json,
title: string,
updatedat?: string,
userid: string}
        Update: {created_at?: string,
id?: string,
isdefault?: boolean | null,
templatedata?: Json,
title?: string,
updatedat?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;contracttemplates_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      education: {Row: {
          createdat: string,
degree: string,
description: string | null,
enddate: string | null,
fieldof_study: string | null,
id: string,
institution: string,
institutionlogo_url: string | null,
iscurrent: boolean,
location: string | null,
resumeid: string,
startdate: string,
updatedat: string}
        Insert: {created_at?: string,
degree: string,
description?: string | null,
enddate?: string | null,
fieldof_study?: string | null,
id?: string,
institution: string,
institutionlogo_url?: string | null,
iscurrent?: boolean,
location?: string | null,
resumeid: string,
startdate: string,
updatedat?: string}
        Update: {created_at?: string,
degree?: string,
description?: string | null,
enddate?: string | null,
fieldof_study?: string | null,
id?: string,
institution?: string,
institutionlogo_url?: string | null,
iscurrent?: boolean,
location?: string | null,
resumeid?: string,
startdate?: string,
updatedat?: string}
        Relationships: [
          {
            foreignKeyName: &quot;educationresume_id_fkey&quot;
            columns: [&quot;resumeid&quot]
            isOneToOne: false,
referencedRelation: &quot;talentresumes&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      frauddetection_reports: {Row: {
          actiontaken_count: number,
dangerouscount: number,
falsepositive_count: number,
generatedat: string,
id: string,
reportdata: Json | null,
reportmonth: string,
suspiciouscount: number,
totalflags: number}
        Insert: {action_taken_count?: number,
dangerouscount?: number,
falsepositive_count?: number,
generatedat?: string,
id?: string,
reportdata?: Json | null,
reportmonth: string,
suspiciouscount?: number,
totalflags?: number}
        Update: {action_taken_count?: number,
dangerouscount?: number,
falsepositive_count?: number,
generatedat?: string,
id?: string,
reportdata?: Json | null,
reportmonth?: string,
suspiciouscount?: number,
totalflags?: number}
        Relationships: []
      }
      fraudflags: {Row: {
          actiontaken: string | null,
contentexcerpt: string,
contentid: string,
contenttype: string,
gptclassification: string | null,
gptexplanation: string | null,
id: string,
ipaddress: string | null,
isfalse_positive: boolean | null,
reason: string,
reviewedat: string | null,
reviewedby: string | null,
severity: Database[&quot;public&quot][&quot;Enums&quot][&quot;fraudseverity&quot]
          status: string,
timestamp: string,
updatedat: string | null,
useremail: string | null,
userid: string | null}
        Insert: {action_taken?: string | null,
contentexcerpt: string,
contentid: string,
contenttype: string,
gptclassification?: string | null,
gptexplanation?: string | null,
id?: string,
ipaddress?: string | null,
isfalse_positive?: boolean | null,
reason: string,
reviewedat?: string | null,
reviewedby?: string | null,
severity?: Database[&quot;public&quot][&quot;Enums&quot][&quot;fraudseverity&quot]
          status?: string,
timestamp?: string,
updatedat?: string | null,
useremail?: string | null,
userid?: string | null}
        Update: {action_taken?: string | null,
contentexcerpt?: string,
contentid?: string,
contenttype?: string,
gptclassification?: string | null,
gptexplanation?: string | null,
id?: string,
ipaddress?: string | null,
isfalse_positive?: boolean | null,
reason?: string,
reviewedat?: string | null,
reviewedby?: string | null,
severity?: Database[&quot;public&quot][&quot;Enums&quot][&quot;fraudseverity&quot]
          status?: string,
timestamp?: string,
updatedat?: string | null,
useremail?: string | null,
userid?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;fraudflags_reviewed_by_fkey&quot;
            columns: [&quot;reviewedby&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          },
          {
            foreignKeyName: &quot;fraudflags_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      hirerequests: {Row: {
          attachments: Json | null,
budgetdisplay: string | null,
budgetmax: number | null,
budgetmin: number | null,
createdat: string,
expirydate: string | null,
id: string,
projectoverview: string,
projectsummary: string | null,
projecttype: string | null,
requesteremail: string,
requesterid: string | null,
requestername: string,
status: string,
talentid: string,
timeline: string,
updatedat: string}
        Insert: {attachments?: Json | null,
budgetdisplay?: string | null,
budgetmax?: number | null,
budgetmin?: number | null,
createdat?: string,
expirydate?: string | null,
id?: string,
projectoverview: string,
projectsummary?: string | null,
projecttype?: string | null,
requesteremail: string,
requesterid?: string | null,
requestername: string,
status?: string,
talentid: string,
timeline: string,
updatedat?: string}
        Update: {attachments?: Json | null,
budgetdisplay?: string | null,
budgetmax?: number | null,
budgetmin?: number | null,
createdat?: string,
expirydate?: string | null,
id?: string,
projectoverview?: string,
projectsummary?: string | null,
projecttype?: string | null,
requesteremail?: string,
requesterid?: string | null,
requestername?: string,
status?: string,
talentid?: string,
timeline?: string,
updatedat?: string}
        Relationships: []
      }
      interviews: {Row: {
          clientid: string,
createdat: string,
durationminutes: number,
endtime: string | null,
id: string,
interviewtype: string,
meetinglink: string | null,
meetingplatform: string | null,
notes: string | null,
remindersent: string | null,
scheduleddate: string,
status: string,
talentid: string,
title: string | null,
updatedat: string}
        Insert: {client_id: string,
createdat?: string,
durationminutes?: number,
endtime?: string | null,
id?: string,
interviewtype?: string,
meetinglink?: string | null,
meetingplatform?: string | null,
notes?: string | null,
remindersent?: string | null,
scheduleddate: string,
status?: string,
talentid: string,
title?: string | null,
updatedat?: string}
        Update: {client_id?: string,
createdat?: string,
durationminutes?: number,
endtime?: string | null,
id?: string,
interviewtype?: string,
meetinglink?: string | null,
meetingplatform?: string | null,
notes?: string | null,
remindersent?: string | null,
scheduleddate?: string,
status?: string,
talentid?: string,
title?: string | null,
updatedat?: string}
        Relationships: []
      }
      jobapplications: {Row: {
          coverletter: string | null,
createdat: string | null,
id: string,
isshortlisted: boolean | null,
jobid: string,
matchbreakdown: Json | null,
matchscore: number | null,
matchsuggestion: string | null,
matchsummary: string | null,
resumeid: string | null,
scoredat: string | null,
status: string,
talentid: string,
viewedat: string | null}
        Insert: {cover_letter?: string | null,
createdat?: string | null,
id?: string,
isshortlisted?: boolean | null,
jobid: string,
matchbreakdown?: Json | null,
matchscore?: number | null,
matchsuggestion?: string | null,
matchsummary?: string | null,
resumeid?: string | null,
scoredat?: string | null,
status?: string,
talentid: string,
viewedat?: string | null}
        Update: {cover_letter?: string | null,
createdat?: string | null,
id?: string,
isshortlisted?: boolean | null,
jobid?: string,
matchbreakdown?: Json | null,
matchscore?: number | null,
matchsuggestion?: string | null,
matchsummary?: string | null,
resumeid?: string | null,
scoredat?: string | null,
status?: string,
talentid?: string,
viewedat?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;jobapplications_job_id_fkey&quot;
            columns: [&quot;jobid&quot]
            isOneToOne: false,
referencedRelation: &quot;jobs&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;jobapplications_resume_id_fkey&quot;
            columns: [&quot;resumeid&quot]
            isOneToOne: false,
referencedRelation: &quot;talentresumes&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;jobapplications_talent_id_fkey&quot;
            columns: [&quot;talentid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      jobs: {Row: {
          budget: Json,
category: string,
clientid: string,
createdat: string,
deadline: string | null,
description: string,
id: string,
skills: string[]
          status: string,
title: string,
updatedat: string}
        Insert: {budget?: Json,
category: string,
clientid: string,
createdat?: string,
deadline?: string | null,
description: string,
id?: string,
skills?: string[]
          status?: string,
title: string,
updatedat?: string}
        Update: {budget?: Json,
category?: string,
clientid?: string,
createdat?: string,
deadline?: string | null,
description?: string,
id?: string,
skills?: string[]
          status?: string,
title?: string,
updatedat?: string}
        Relationships: [
          {
            foreignKeyName: &quot;jobsclient_id_fkey&quot;
            columns: [&quot;clientid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      milestoneactivities: {Row: {
          action: string,
comment: string | null,
createdat: string,
id: string,
milestoneid: string,
newstatus: string,
previousstatus: string | null,
userid: string}
        Insert: {action: string,
comment?: string | null,
createdat?: string,
id?: string,
milestoneid: string,
newstatus: string,
previousstatus?: string | null,
userid: string}
        Update: {action?: string,
comment?: string | null,
createdat?: string,
id?: string,
milestoneid?: string,
newstatus?: string,
previousstatus?: string | null,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;milestoneactivities_milestone_id_fkey&quot;
            columns: [&quot;milestoneid&quot]
            isOneToOne: false,
referencedRelation: &quot;projectmilestones&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;milestoneactivities_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      notificationpreferences: {Row: {
          createdat: string,
id: string,
marketingemails: boolean | null,
systemnotifications: boolean | null,
updatedat: string,
userid: string}
        Insert: {created_at?: string,
id?: string,
marketingemails?: boolean | null,
systemnotifications?: boolean | null,
updatedat?: string,
userid: string}
        Update: {created_at?: string,
id?: string,
marketingemails?: boolean | null,
systemnotifications?: boolean | null,
updatedat?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;notificationpreferences_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: true,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      notifications: {Row: {
          createdat: string | null,
id: string,
message: string,
read: boolean | null,
relatedid: string | null,
title: string,
type: string,
updatedat: string | null,
userid: string}
        Insert: {created_at?: string | null,
id?: string,
message: string,
read?: boolean | null,
relatedid?: string | null,
title: string,
type: string,
updatedat?: string | null,
userid: string}
        Update: {created_at?: string | null,
id?: string,
message?: string,
read?: boolean | null,
relatedid?: string | null,
title?: string,
type?: string,
updatedat?: string | null,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;notificationsuser_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      partnerpayouts: {Row: {
          amount: number,
completedat: string | null,
createdat: string,
id: string,
method: string,
partnerid: string,
payoutdetails: Json | null,
status: string,
updatedat: string}
        Insert: {amount: number,
completedat?: string | null,
createdat?: string,
id?: string,
method: string,
partnerid: string,
payoutdetails?: Json | null,
status?: string,
updatedat?: string}
        Update: {amount?: number,
completedat?: string | null,
createdat?: string,
id?: string,
method?: string,
partnerid?: string,
payoutdetails?: Json | null,
status?: string,
updatedat?: string}
        Relationships: [
          {
            foreignKeyName: &quot;partnerpayouts_partner_id_fkey&quot;
            columns: [&quot;partnerid&quot]
            isOneToOne: false,
referencedRelation: &quot;partnerprofiles&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      partnerprofiles: {Row: {
          audiencesize: string,
bio: string,
commissionrate: number | null,
createdat: string,
fraudflags: number | null,
id: string,
name: string,
niche: string,
payoutmethod: string,
socialmedia: Json | null,
status: string,
updatedat: string,
userid: string,
website: string | null}
        Insert: {audience_size: string,
bio: string,
commissionrate?: number | null,
createdat?: string,
fraudflags?: number | null,
id?: string,
name: string,
niche: string,
payoutmethod: string,
socialmedia?: Json | null,
status?: string,
updatedat?: string,
userid: string,
website?: string | null}
        Update: {audience_size?: string,
bio?: string,
commissionrate?: number | null,
createdat?: string,
fraudflags?: number | null,
id?: string,
name?: string,
niche?: string,
payoutmethod?: string,
socialmedia?: Json | null,
status?: string,
updatedat?: string,
userid?: string,
website?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;partnerprofiles_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      partnerreferral_links: {Row: {
          campaign: string | null,
clicks: number | null,
conversions: number | null,
createdat: string,
id: string,
name: string,
partnerid: string,
source: string | null,
updatedat: string}
        Insert: {campaign?: string | null,
clicks?: number | null,
conversions?: number | null,
createdat?: string,
id?: string,
name: string,
partnerid: string,
source?: string | null,
updatedat?: string}
        Update: {campaign?: string | null,
clicks?: number | null,
conversions?: number | null,
createdat?: string,
id?: string,
name?: string,
partnerid?: string,
source?: string | null,
updatedat?: string}
        Relationships: [
          {
            foreignKeyName: &quot;partnerreferral_links_partner_id_fkey&quot;
            columns: [&quot;partnerid&quot]
            isOneToOne: false,
referencedRelation: &quot;partnerprofiles&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      portfolioprojects: {Row: {
          createdat: string,
demourl: string | null,
description: string | null,
githuburl: string | null,
id: string,
imageurl: string | null,
pdfurl: string | null,
technologies: string[] | null,
title: string,
updatedat: string,
userid: string}
        Insert: {created_at?: string,
demourl?: string | null,
description?: string | null,
githuburl?: string | null,
id?: string,
imageurl?: string | null,
pdfurl?: string | null,
technologies?: string[] | null,
title: string,
updatedat?: string,
userid: string}
        Update: {created_at?: string,
demourl?: string | null,
description?: string | null,
githuburl?: string | null,
id?: string,
imageurl?: string | null,
pdfurl?: string | null,
technologies?: string[] | null,
title?: string,
updatedat?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;portfolioprojects_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      profiles: {Row: {
          avatarurl: string | null,
averagerating: number | null,
bio: string | null,
createdat: string,
displayname: string | null,
headline: string | null,
id: string,
ipaddress: string | null,
lastlogin_ip: string | null,
profilecomplete: boolean,
ratingcount: number | null,
ratingsum: number | null,
role: string | null,
signuptimestamp: string | null,
tenantid: string | null,
updatedat: string,
usertype: string | null}
        Insert: {avatar_url?: string | null,
averagerating?: number | null,
bio?: string | null,
createdat?: string,
displayname?: string | null,
headline?: string | null,
id: string,
ipaddress?: string | null,
lastlogin_ip?: string | null,
profilecomplete?: boolean,
ratingcount?: number | null,
ratingsum?: number | null,
role?: string | null,
signuptimestamp?: string | null,
tenantid?: string | null,
updatedat?: string,
usertype?: string | null}
        Update: {avatar_url?: string | null,
averagerating?: number | null,
bio?: string | null,
createdat?: string,
displayname?: string | null,
headline?: string | null,
id?: string,
ipaddress?: string | null,
lastlogin_ip?: string | null,
profilecomplete?: boolean,
ratingcount?: number | null,
ratingsum?: number | null,
role?: string | null,
signuptimestamp?: string | null,
tenantid?: string | null,
updatedat?: string,
usertype?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;profilesid_fkey&quot;
            columns: [&quot;id&quot]
            isOneToOne: true,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          },
          {
            foreignKeyName: &quot;profilestenant_id_fkey&quot;
            columns: [&quot;tenantid&quot]
            isOneToOne: false,
referencedRelation: &quot;whitelabeltenants&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      projectmilestones: {Row: {
          amount: number,
createdat: string,
createdby: string,
deliverables: Json | null,
description: string | null,
duedate: string | null,
id: string,
projectid: string,
status: string,
title: string,
updatedat: string}
        Insert: {amount: number,
createdat?: string,
createdby: string,
deliverables?: Json | null,
description?: string | null,
duedate?: string | null,
id?: string,
projectid: string,
status?: string,
title: string,
updatedat?: string}
        Update: {amount?: number,
createdat?: string,
createdby?: string,
deliverables?: Json | null,
description?: string | null,
duedate?: string | null,
id?: string,
projectid?: string,
status?: string,
title?: string,
updatedat?: string}
        Relationships: [
          {
            foreignKeyName: &quot;projectmilestones_created_by_fkey&quot;
            columns: [&quot;createdby&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          },
          {
            foreignKeyName: &quot;projectmilestones_project_id_fkey&quot;
            columns: [&quot;projectid&quot]
            isOneToOne: false,
referencedRelation: &quot;projects&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      projectnotes: {Row: {
          content: string,
createdat: string,
id: string,
projectid: string,
userid: string}
        Insert: {content: string,
createdat?: string,
id?: string,
projectid: string,
userid: string}
        Update: {content?: string,
createdat?: string,
id?: string,
projectid?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;projectnotes_project_id_fkey&quot;
            columns: [&quot;projectid&quot]
            isOneToOne: false,
referencedRelation: &quot;projects&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;projectnotes_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      projects: {Row: {
          agreementurl: string | null,
clientid: string,
createdat: string,
id: string,
jobid: string,
paymentterms: string,
scopesummary: string,
startdate: string,
status: string,
talentid: string,
updatedat: string}
        Insert: {agreement_url?: string | null,
clientid: string,
createdat?: string,
id?: string,
jobid: string,
paymentterms: string,
scopesummary: string,
startdate: string,
status?: string,
talentid: string,
updatedat?: string}
        Update: {agreement_url?: string | null,
clientid?: string,
createdat?: string,
id?: string,
jobid?: string,
paymentterms?: string,
scopesummary?: string,
startdate?: string,
status?: string,
talentid?: string,
updatedat?: string}
        Relationships: [
          {
            foreignKeyName: &quot;projectsclient_id_fkey&quot;
            columns: [&quot;clientid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          },
          {
            foreignKeyName: &quot;projectsjob_id_fkey&quot;
            columns: [&quot;jobid&quot]
            isOneToOne: false,
referencedRelation: &quot;jobs&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;projectstalent_id_fkey&quot;
            columns: [&quot;talentid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      quoterequests: {Row: {
          budgetdisplay: string | null,
budgetmax: number | null,
budgetmin: number | null,
createdat: string,
id: string,
isarchived: boolean,
projectdescription: string | null,
projectname: string,
projectsummary: string,
repliedat: string | null,
requesteremail: string,
requesterid: string | null,
requestername: string,
startdate: string | null,
status: Database[&quot;public&quot][&quot;Enums&quot][&quot;quoterequest_status&quot]
          talentid: string | null,
timeline: string,
updatedat: string,
viewedat: string | null}
        Insert: {budget_display?: string | null,
budgetmax?: number | null,
budgetmin?: number | null,
createdat?: string,
id?: string,
isarchived?: boolean,
projectdescription?: string | null,
projectname: string,
projectsummary: string,
repliedat?: string | null,
requesteremail: string,
requesterid?: string | null,
requestername: string,
startdate?: string | null,
status?: Database[&quot;public&quot][&quot;Enums&quot][&quot;quoterequest_status&quot]
          talentid?: string | null,
timeline: string,
updatedat?: string,
viewedat?: string | null}
        Update: {budget_display?: string | null,
budgetmax?: number | null,
budgetmin?: number | null,
createdat?: string,
id?: string,
isarchived?: boolean,
projectdescription?: string | null,
projectname?: string,
projectsummary?: string,
repliedat?: string | null,
requesteremail?: string,
requesterid?: string | null,
requestername?: string,
startdate?: string | null,
status?: Database[&quot;public&quot][&quot;Enums&quot][&quot;quoterequest_status&quot]
          talentid?: string | null,
timeline?: string,
updatedat?: string,
viewedat?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;quoterequests_requester_id_fkey&quot;
            columns: [&quot;requesterid&quot]
            isOneToOne: false,
referencedRelation: &quot;profiles&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;quoterequests_talent_id_fkey&quot;
            columns: [&quot;talentid&quot]
            isOneToOne: false,
referencedRelation: &quot;profiles&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      referralcodes: {Row: {
          code: string,
createdat: string,
id: string,
updatedat: string,
userid: string}
        Insert: {code: string,
createdat?: string,
id?: string,
updatedat?: string,
userid: string}
        Update: {code?: string,
createdat?: string,
id?: string,
updatedat?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;referralcodes_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: true,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      referralrewards: {Row: {
          amount: number | null,
createdat: string,
expiresat: string | null,
id: string,
partnerid: string | null,
referralid: string,
rewardtype: string,
userid: string}
        Insert: {amount?: number | null,
createdat?: string,
expiresat?: string | null,
id?: string,
partnerid?: string | null,
referralid: string,
rewardtype: string,
userid: string}
        Update: {amount?: number | null,
createdat?: string,
expiresat?: string | null,
id?: string,
partnerid?: string | null,
referralid?: string,
rewardtype?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;referralrewards_partner_id_fkey&quot;
            columns: [&quot;partnerid&quot]
            isOneToOne: false,
referencedRelation: &quot;partnerprofiles&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;referralrewards_referral_id_fkey&quot;
            columns: [&quot;referralid&quot]
            isOneToOne: false,
referencedRelation: &quot;referrals&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;referralrewards_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      referrals: {Row: {
          completedat: string | null,
createdat: string,
email: string | null,
id: string,
ipaddress: string | null,
partnerid: string | null,
referralcode: string,
referredid: string | null,
referreduser_type: string | null,
referrerid: string,
referreruser_type: string | null,
rewardissued: boolean,
rewardissued_at: string | null,
status: Database[&quot;public&quot][&quot;Enums&quot][&quot;referralstatus&quot]
        }
        Insert: {
          completedat?: string | null          createdat?: string,
email?: string | null,
id?: string,
ipaddress?: string | null,
partnerid?: string | null,
referralcode: string,
referredid?: string | null,
referreduser_type?: string | null,
referrerid: string,
referreruser_type?: string | null,
rewardissued?: boolean,
rewardissued_at?: string | null,
status?: Database[&quot;public&quot][&quot;Enums&quot][&quot;referralstatus&quot]
        }
        Update: {
          completedat?: string | null          createdat?: string,
email?: string | null,
id?: string,
ipaddress?: string | null,
partnerid?: string | null,
referralcode?: string,
referredid?: string | null,
referreduser_type?: string | null,
referrerid?: string,
referreruser_type?: string | null,
rewardissued?: boolean,
rewardissued_at?: string | null,
status?: Database[&quot;public&quot][&quot;Enums&quot][&quot;referralstatus&quot]
        }
        Relationships: [
          {
            foreignKeyName: &quot;referralspartner_id_fkey&quot;
            columns: [&quot;partnerid&quot]
            isOneToOne: false,
referencedRelation: &quot;partnerprofiles&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;referralsreferral_code_fkey&quot;
            columns: [&quot;referralcode&quot]
            isOneToOne: false,
referencedRelation: &quot;referralcodes&quot;
            referencedColumns: [&quot;code&quot]
          },
          {
            foreignKeyName: &quot;referralsreferred_id_fkey&quot;
            columns: [&quot;referredid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          },
          {
            foreignKeyName: &quot;referralsreferrer_id_fkey&quot;
            columns: [&quot;referrerid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      reminderlogs: {Row: {
          clickedat: string | null,
emailbody: string,
emailsubject: string,
id: string,
openedat: string | null,
remindertype: string,
sentat: string | null,
userid: string}
        Insert: {clicked_at?: string | null,
emailbody: string,
emailsubject: string,
id?: string,
openedat?: string | null,
remindertype: string,
sentat?: string | null,
userid: string}
        Update: {clicked_at?: string | null,
emailbody?: string,
emailsubject?: string,
id?: string,
openedat?: string | null,
remindertype?: string,
sentat?: string | null,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;reminderlogs_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      resumeskills: {Row: {
          category: string | null,
createdat: string,
id: string,
name: string,
proficiency: number | null,
resumeid: string,
yearsexperience: number | null}
        Insert: {category?: string | null,
createdat?: string,
id?: string,
name: string,
proficiency?: number | null,
resumeid: string,
yearsexperience?: number | null}
        Update: {category?: string | null,
createdat?: string,
id?: string,
name?: string,
proficiency?: number | null,
resumeid?: string,
yearsexperience?: number | null}
        Relationships: [
          {
            foreignKeyName: &quot;resumeskills_resume_id_fkey&quot;
            columns: [&quot;resumeid&quot]
            isOneToOne: false,
referencedRelation: &quot;talentresumes&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      reviewreports: {Row: {
          createdat: string,
id: string,
reason: string,
reporterid: string,
resolvedat: string | null,
reviewid: string,
status: string}
        Insert: {created_at?: string,
id?: string,
reason: string,
reporterid: string,
resolvedat?: string | null,
reviewid: string,
status?: string}
        Update: {created_at?: string,
id?: string,
reason?: string,
reporterid?: string,
resolvedat?: string | null,
reviewid?: string,
status?: string}
        Relationships: [
          {
            foreignKeyName: &quot;reviewreports_reporter_id_fkey&quot;
            columns: [&quot;reporterid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          },
          {
            foreignKeyName: &quot;reviewreports_review_id_fkey&quot;
            columns: [&quot;reviewid&quot]
            isOneToOne: false,
referencedRelation: &quot;reviews&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
      reviews: {Row: {
          communicationrating: number | null,
createdat: string,
id: string,
isanonymous: boolean,
isvisible: boolean,
projectid: string,
qualityrating: number | null,
rating: number,
reportcount: number,
reviewtext: string,
revieweeid: string,
reviewerid: string,
status: string,
timelinessrating: number | null,
updatedat: string,
wouldwork_again: boolean | null}
        Insert: {communication_rating?: number | null,
createdat?: string,
id?: string,
isanonymous?: boolean,
isvisible?: boolean,
projectid: string,
qualityrating?: number | null,
rating: number,
reportcount?: number,
reviewtext: string,
revieweeid: string,
reviewerid: string,
status?: string,
timelinessrating?: number | null,
updatedat?: string,
wouldwork_again?: boolean | null}
        Update: {communication_rating?: number | null,
createdat?: string,
id?: string,
isanonymous?: boolean,
isvisible?: boolean,
projectid?: string,
qualityrating?: number | null,
rating?: number,
reportcount?: number,
reviewtext?: string,
revieweeid?: string,
reviewerid?: string,
status?: string,
timelinessrating?: number | null,
updatedat?: string,
wouldwork_again?: boolean | null}
        Relationships: [
          {
            foreignKeyName: &quot;reviewsproject_id_fkey&quot;
            columns: [&quot;projectid&quot]
            isOneToOne: false,
referencedRelation: &quot;projects&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;reviewsreviewee_id_fkey&quot;
            columns: [&quot;revieweeid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          },
          {
            foreignKeyName: &quot;reviewsreviewer_id_fkey&quot;
            columns: [&quot;reviewerid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      scheduledjobs: {Row: {
          completedat: string | null,
createdat: string,
id: string,
jobtype: string,
payload: Json | null,
scheduledfor: string,
status: string,
updatedat: string}
        Insert: {completed_at?: string | null,
createdat?: string,
id?: string,
jobtype: string,
payload?: Json | null,
scheduledfor: string,
status: string,
updatedat?: string}
        Update: {completed_at?: string | null,
createdat?: string,
id?: string,
jobtype?: string,
payload?: Json | null,
scheduledfor?: string,
status?: string,
updatedat?: string}
        Relationships: []
      }
      subscriptions: {Row: {
          createdat: string,
currentperiod_end: string | null,
currentperiod_start: string | null,
id: string,
plantype: string,
status: string,
stripecustomer_id: string | null,
stripesubscription_id: string | null,
updatedat: string,
userid: string}
        Insert: {created_at?: string,
currentperiod_end?: string | null,
currentperiod_start?: string | null,
id?: string,
plantype: string,
status: string,
stripecustomer_id?: string | null,
stripesubscription_id?: string | null,
updatedat?: string,
userid: string}
        Update: {created_at?: string,
currentperiod_end?: string | null,
currentperiod_start?: string | null,
id?: string,
plantype?: string,
status?: string,
stripecustomer_id?: string | null,
stripesubscription_id?: string | null,
updatedat?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;subscriptionsuser_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      talentresumes: {Row: {
          createdat: string,
headline: string | null,
id: string,
isactive: boolean,
summary: string | null,
title: string,
updatedat: string,
userid: string}
        Insert: {created_at?: string,
headline?: string | null,
id?: string,
isactive?: boolean,
summary?: string | null,
title?: string,
updatedat?: string,
userid: string}
        Update: {created_at?: string,
headline?: string | null,
id?: string,
isactive?: boolean,
summary?: string | null,
title?: string,
updatedat?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;talentresumes_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      tenantadministrators: {Row: {
          createdat: string | null,
id: string,
tenantid: string,
userid: string}
        Insert: {created_at?: string | null,
id?: string,
tenantid: string,
userid: string}
        Update: {created_at?: string | null,
id?: string,
tenantid?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;tenantadministrators_tenant_id_fkey&quot;
            columns: [&quot;tenantid&quot]
            isOneToOne: false,
referencedRelation: &quot;whitelabeltenants&quot;
            referencedColumns: [&quot;id&quot]
          },
          {
            foreignKeyName: &quot;tenantadministrators_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      useronboarding: {Row: {
          applicationsent: boolean | null,
applicationsent_at: string | null,
availabilityset: boolean | null,
availabilityset_at: string | null,
createdat: string,
id: string,
jobposted: boolean | null,
jobposted_at: string | null,
lastreminder_sent: string | null,
matchreceived: boolean | null,
matchreceived_at: string | null,
matchviewed: boolean | null,
matchviewed_at: string | null,
profilecompleted: boolean | null,
profilecompleted_at: string | null,
quotereceived: boolean | null,
quotereceived_at: string | null,
remindercount: number | null,
role: string,
skillsadded: boolean | null,
skillsadded_at: string | null,
talentinvited: boolean | null,
talentinvited_at: string | null,
updatedat: string,
userid: string | null}
        Insert: {application_sent?: boolean | null,
applicationsent_at?: string | null,
availabilityset?: boolean | null,
availabilityset_at?: string | null,
createdat?: string,
id?: string,
jobposted?: boolean | null,
jobposted_at?: string | null,
lastreminder_sent?: string | null,
matchreceived?: boolean | null,
matchreceived_at?: string | null,
matchviewed?: boolean | null,
matchviewed_at?: string | null,
profilecompleted?: boolean | null,
profilecompleted_at?: string | null,
quotereceived?: boolean | null,
quotereceived_at?: string | null,
remindercount?: number | null,
role: string,
skillsadded?: boolean | null,
skillsadded_at?: string | null,
talentinvited?: boolean | null,
talentinvited_at?: string | null,
updatedat?: string,
userid?: string | null}
        Update: {application_sent?: boolean | null,
applicationsent_at?: string | null,
availabilityset?: boolean | null,
availabilityset_at?: string | null,
createdat?: string,
id?: string,
jobposted?: boolean | null,
jobposted_at?: string | null,
lastreminder_sent?: string | null,
matchreceived?: boolean | null,
matchreceived_at?: string | null,
matchviewed?: boolean | null,
matchviewed_at?: string | null,
profilecompleted?: boolean | null,
profilecompleted_at?: string | null,
quotereceived?: boolean | null,
quotereceived_at?: string | null,
remindercount?: number | null,
role?: string,
skillsadded?: boolean | null,
skillsadded_at?: string | null,
talentinvited?: boolean | null,
talentinvited_at?: string | null,
updatedat?: string,
userid?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;useronboarding_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      userprivacy_settings: {Row: {
          activitymonitoring_enabled: boolean | null,
aianalysis_enabled: boolean | null,
id: string,
messagescanning_enabled: boolean | null,
updatedat: string | null}
        Insert: {activity_monitoring_enabled?: boolean | null,
aianalysis_enabled?: boolean | null,
id: string,
messagescanning_enabled?: boolean | null,
updatedat?: string | null}
        Update: {activity_monitoring_enabled?: boolean | null,
aianalysis_enabled?: boolean | null,
id?: string,
messagescanning_enabled?: boolean | null,
updatedat?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;userprivacy_settings_id_fkey&quot;
            columns: [&quot;id&quot]
            isOneToOne: true,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      webhookconfigs: {Row: {
          createdat: string,
eventtypes: string[]
          id: string,
isactive: boolean,
lasttriggered_at: string | null,
name: string,
secret: string | null,
updatedat: string,
url: string,
userid: string}
        Insert: {created_at?: string,
eventtypes: string[]
          id?: string,
isactive?: boolean,
lasttriggered_at?: string | null,
name: string,
secret?: string | null,
updatedat?: string,
url: string,
userid: string}
        Update: {created_at?: string,
eventtypes?: string[]
          id?: string,
isactive?: boolean,
lasttriggered_at?: string | null,
name?: string,
secret?: string | null,
updatedat?: string,
url?: string,
userid?: string}
        Relationships: [
          {
            foreignKeyName: &quot;webhookconfigs_user_id_fkey&quot;
            columns: [&quot;userid&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      whitelabeltenants: {Row: {
          accountmanager_id: string | null,
brandname: string,
createdat: string | null,
customdomain: string | null,
dnsverified: boolean,
emailtemplate_override: Json | null,
id: string,
isactive: boolean,
landingpage_copy: Json | null,
logourl: string | null,
primarycolor: string,
subdomain: string,
themepreset: string,
updatedat: string | null}
        Insert: {account_manager_id?: string | null,
brandname: string,
createdat?: string | null,
customdomain?: string | null,
dnsverified?: boolean,
emailtemplate_override?: Json | null,
id?: string,
isactive?: boolean,
landingpage_copy?: Json | null,
logourl?: string | null,
primarycolor?: string,
subdomain: string,
themepreset?: string,
updatedat?: string | null}
        Update: {account_manager_id?: string | null,
brandname?: string,
createdat?: string | null,
customdomain?: string | null,
dnsverified?: boolean,
emailtemplate_override?: Json | null,
id?: string,
isactive?: boolean,
landingpage_copy?: Json | null,
logourl?: string | null,
primarycolor?: string,
subdomain?: string,
themepreset?: string,
updatedat?: string | null}
        Relationships: [
          {
            foreignKeyName: &quot;whitelabeltenants_account_manager_id_fkey&quot;
            columns: [&quot;accountmanager_id&quot]
            isOneToOne: false,
referencedRelation: &quot;usermetrics&quot;
            referencedColumns: [&quot;userid&quot]
          }]      }
      workhistory: {Row: {
          companylogo_url: string | null,
companyname: string,
createdat: string,
description: string | null,
enddate: string | null,
id: string,
iscurrent: boolean,
location: string | null,
resumeid: string,
roletitle: string,
startdate: string,
updatedat: string}
        Insert: {company_logo_url?: string | null,
companyname: string,
createdat?: string,
description?: string | null,
enddate?: string | null,
id?: string,
iscurrent?: boolean,
location?: string | null,
resumeid: string,
roletitle: string,
startdate: string,
updatedat?: string}
        Update: {company_logo_url?: string | null,
companyname?: string,
createdat?: string,
description?: string | null,
enddate?: string | null,
id?: string,
iscurrent?: boolean,
location?: string | null,
resumeid?: string,
roletitle?: string,
startdate?: string,
updatedat?: string}
        Relationships: [
          {
            foreignKeyName: &quot;workhistory_resume_id_fkey&quot;
            columns: [&quot;resumeid&quot]
            isOneToOne: false,
referencedRelation: &quot;talentresumes&quot;
            referencedColumns: [&quot;id&quot]
          }]      }
    }
    Views: {conversion_rates: {
        Row: {
          conversioncount: number | null,
conversionrate: number | null,
conversiontype: string | null,
date: string | null,
viewcount: number | null}
        Relationships: []
      }
      dailypage_views: {Row: {
          date: string | null,
path: string | null,
viewcount: number | null}
        Relationships: []
      }
      usermetrics: {Row: {
          jobapplications: number | null,
profileviews: number | null,
quoteinvites: number | null,
successrate: number | null,
userid: string | null}
        Insert: {job_applications?: never,
profileviews?: never,
quoteinvites?: never,
successrate?: never,
userid?: string | null}
        Update: {job_applications?: never,
profileviews?: never,
quoteinvites?: never,
successrate?: never,
userid?: string | null}
        Relationships: []
      }
    }
    Functions: {
      checkusers_needing_reminders: {
        Args: Record<PropertyKey never>        Returns: {
          userid: string,
email: string,
displayname: string,
usertype: string,
lastlogin: string,
remindertype: string,
dayssince_login: number,
onboardingstatus: Json}[]
      }
      completereferral: {
        Args: { referred_id: string, user_type: string }        Returns: undefined
      }
      createnotification: {Args: {
          user_id: string,
title: string,
message: string,
type: string,
related_id?: string}
        Returns: string
      }
      createscheduled_reminders: {
        Args: Record<PropertyKey never>
        Returns: undefined
      }
      flagsuspicious_content: {
        Args: {          puser_id: string,
puser_email: string,
pcontent_type: string,
pcontent_id: string,
pcontent_excerpt: string,
pseverity: string,
preason: string,
pip_address: string}
        Returns: string
      }
      generateapi_key: {Args: { prefix: string}
        Returns: string
      }
      generatefraud_report: {
        Args: { year: number, month: number }        Returns: string
      }
      generatereferral_code: {Args: { userid: string}
        Returns: string
      }
      getapi_key_user_id: {
        Args: { keyprefix: string, providedkey: string }
        Returns: string
      }
      getcurrent_tenant_id: {
        Args: Record<PropertyKey never>
        Returns: string
      }
      getevent_distribution: {
        Args: { daysback?: number }
        Returns: {
          date: string          eventtype: string,
count: number}[]
      }
      hashapi_key: {Args: { apikey: string}
        Returns: string
      }
      scheduleemail_reminders: {
        Args: Record<PropertyKey never>
        Returns: number
      }
      triggerresume_scoring: {
        Args: { applicationid: string }
        Returns: undefined
      }
      updateonboarding_milestone: {
        Args: { user_id: string, milestone: string, status: boolean }
        Returns: undefined
      }
      verifyapi_key: {
        Args: { providedkey: string, storedhash: string }
        Returns: boolean
      }
    }
    Enums: {
      apikey_scope:
        | &quot;jobs:read&quot;
        | &quot;jobs:write&quot;
        | &quot;talent:read&quot;
        | &quot;quotes:write&quot;
        | &quot;webhooks:manage&quot;
      fraudseverity: &quot;safe&quot; | &quot;suspicious&quot; | &quot;dangerous&quot;
      quoterequest_status:
        | &quot;new&quot;
        | &quot;inreview&quot;
        | &quot;accepted&quot;
        | &quot;responded&quot;
        | &quot;closed&quot;
        | &quot;archived&quot;
      referralstatus: &quot;pending&quot; | &quot;completed&quot; | &quot;expired&quot
    }
    CompositeTypes: {
      [_ in never]: never
    }  }
}

type DefaultSchema = Database[Extract<keyof Database, &quot;public&quot;>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema[&quot;Tables&quot] & DefaultSchema[&quot;Views&quot])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema[&quot;Tables&quot] &
        DefaultSchema[&quot;Views&quot])
    ? (DefaultSchema[&quot;Tables&quot] &
        DefaultSchema[&quot;Views&quot])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | {schema: keyof Database},
  TableName extends DefaultSchemaTableNameOrOptions extends {schema: keyof Database}
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {schema: keyof Database}
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {Row: infer R}
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {Row: infer R}
      ? R
      : never
    : never,
export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema[&quot;Tables&quot]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    ? keyof Database[DefaultSchemaTableNameOrOptions[&quot;schema&quot]][&quot;Tables&quot]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions[&quot;schema&quot]][&quot;Tables&quot][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema[&quot;Tables&quot]
    ? DefaultSchema[&quot;Tables&quot][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }      ? I
      : never
    : never,
export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema[&quot;Tables&quot]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    ? keyof Database[DefaultSchemaTableNameOrOptions[&quot;schema&quot]][&quot;Tables&quot]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions[&quot;schema&quot]][&quot;Tables&quot][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema[&quot;Tables&quot]
    ? DefaultSchema[&quot;Tables&quot][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }      ? U
      : never
    : never,
export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema[&quot;Enums&quot]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    ? keyof Database[DefaultSchemaEnumNameOrOptions[&quot;schema&quot]][&quot;Enums&quot]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions[&quot;schema&quot]][&quot;Enums&quot][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema[&quot;Enums&quot]
    ? DefaultSchema[&quot;Enums&quot][DefaultSchemaEnumNameOrOptions]
    : never,
export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema[&quot;CompositeTypes&quot]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    ? keyof Database[PublicCompositeTypeNameOrOptions[&quot;schema&quot]][&quot;CompositeTypes&quot]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions[&quot;schema&quot]][&quot;CompositeTypes&quot][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema[&quot;CompositeTypes&quot]
    ? DefaultSchema[&quot;CompositeTypes&quot][PublicCompositeTypeNameOrOptions]
    : never,
export const Constants = {public: {
    Enums: {
      apikey_scope: [
        &quot;jobs:read&quot;,
        &quot;jobs:write&quot;,
        &quot;talent:read&quot;,
        &quot;quotes:write&quot;,
        &quot;webhooks:manage&quot],
      fraudseverity: [&quot;safe&quot;, &quot;suspicious&quot;, &quot;dangerous&quot],
      quoterequest_status: [
        &quot;new&quot;,
        &quot;inreview&quot;,
        &quot;accepted&quot;,
        &quot;responded&quot;,
        &quot;closed&quot;,
        &quot;archived&quot],
      referralstatus: [&quot;pending&quot;, &quot;completed&quot;, &quot;expired&quot]}}} as const
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
